const accessKeyId: string = process.env.AWS_API_ACCESS_KEY;
const secretAccessKey: string = process.env.AWS_API_SECRET_KEY;
const awsRegion: string = process.env.AWS_API_REGION;
const appStage: string = process.env.STAGE;
const awsArn: string = process.env.AWS_API_ARN;

export const awsConfig = {
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: awsRegion,
  arn: awsArn
};

export const globalConst = {
  stage: appStage,
}