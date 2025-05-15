export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],

    // Cubes
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0], // Right Bottom
    cube2Position: isSmall ? [-3, 4, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-5, 4, 0] : [-12, 3, 0], // Left Top

    // React Logos
    reactLogo2Position: isSmall ? [-4, -5, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-9, -5.5, 0], // Left Bottom
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0], // Right Top
  };
};