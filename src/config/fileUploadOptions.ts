/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';

export default {
  storage: multer.memoryStorage(),
  limits: { fieldNameSize: 255, fileSize: 2097152 },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype === 'text/plain') cb(null, true);
    else cb(new Error('Solo archivos .txt'));
  },
};
