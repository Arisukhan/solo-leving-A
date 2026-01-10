import styles from './TopBorder.module.css';

const TopBorder = () => {
  return (
    <div className={styles.topBorderContainer}>
      {/* 1. Energy Body Layer - Physical Mass */}
      <div className={styles.glowBody}></div>
      <div className={styles.glowBodyInner}></div>

      {/* 2. Core Energy Rails - Bright sharp lines */}
      <div className={styles.coreRail}></div>
      <div className={styles.coreRailBottom}></div>

      {/* 3. Secondary Trace Lines - Depth */}
      <div className={styles.secondaryTrace}></div>
      <div className={styles.tertiaryTrace}></div>

      {/* 4. Energy Noise Layer - Texture */}
      <div className={styles.energyNoise}></div>

      {/* 5. Power Joints - Mechanical Corners */}
      <div className={styles.cornerJointLeft}></div>
      <div className={styles.cornerJointRight}></div>
    </div>
  );
};

export default TopBorder;
