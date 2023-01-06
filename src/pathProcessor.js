import path from 'path';

const pathProcessor = (firstPath, secondPath) => {
  const firstCurrentPath = path.resolve(firstPath);
  const secondCurrentPath = path.resolve(secondPath);
  return [firstCurrentPath, secondCurrentPath];
};

export default pathProcessor;
