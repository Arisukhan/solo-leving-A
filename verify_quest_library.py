from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5173")

        # Clear local storage to ensure a clean state
        page.evaluate("window.localStorage.clear()")
        page.reload()
        page.wait_for_load_state("networkidle")

        # Log in to the app
        page.click("text=YES")
        page.fill('input[type="text"]', 'Arisukhan')
        page.fill('input[type="password"]', 'password')
        page.click('button[type="submit"]')

        # Navigate to Quest Library
        page.locator('nav a').nth(1).click()
        page.wait_for_selector("text=Quest Library")
        print("Successfully navigated to Quest Library.")

        # Add a new quest
        page.click("text=+ Add Quest")
        page.fill('input[name="title"]', 'Test Quest')
        page.fill('textarea[name="description"]', 'This is a test quest.')
        page.fill('textarea[name="howToDo"]', 'Complete the test steps.')
        page.select_option('select[name="category"]', 'Special')
        page.fill('input[name="xp"]', '150')
        page.click("text=DEX")
        page.click("text=Save")
        print("Successfully added a new quest.")

        # Verify the new quest is displayed
        page.wait_for_selector("text=Test Quest")
        print("New quest is visible.")

        # Search for the quest
        page.fill('input[type="text"][placeholder="Search quests..."]', 'Test Quest')
        page.wait_for_selector("text=Test Quest")
        print("Search functionality is working.")

        # Edit the quest
        page.click('button[aria-label="Edit Test Quest"]')
        page.fill('input[name="title"]', 'Edited Test Quest')
        page.click("text=Save")
        print("Successfully edited the quest.")

        # Verify the edited quest
        page.wait_for_selector("text=Edited Test Quest")
        print("Edited quest is visible.")

        # Open and close detail view
        page.click("text=Edited Test Quest")
        page.wait_for_selector("text=This is a test quest.")
        page.click('button[aria-label="Close detail view"]')
        print("Detail view opened and closed successfully.")

        # Delete the quest
        page.click('button[aria-label="Delete Edited Test Quest"]')
        page.wait_for_timeout(500) # Wait for animation
        if page.locator("text=Edited Test Quest").count() == 0:
            print("Successfully deleted the quest.")
        else:
            print("Error: Quest was not deleted.")
            raise Exception("Quest deletion failed")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path='playwright_error.png')
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
