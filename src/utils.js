export const findImageFluidData = (imageName, allImages) =>
  allImages.find((img) => img.childImageSharp.fluid.originalName === imageName);
