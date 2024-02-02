import { Request, Response } from 'express';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const buildKeyFromFileName = (fileName: string) => {
  return `${new Date().toISOString()}-${fileName}`;
};

export const Upload = async (req: Request, res: Response) => {
  try {
    const { fileName } = req.body;
    const key = buildKeyFromFileName(fileName);

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      ContentType: 'application/octet-stream',
      ACL: 'public-read',
    });

    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    return res.status(200).json({
      url,
      key,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Internal server error');
  }
};
