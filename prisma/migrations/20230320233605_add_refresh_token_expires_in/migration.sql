/*
  Warnings:

  - The `features` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserFeature" AS ENUM ('SIGNIN');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "refresh_token_expires_in" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "features",
ADD COLUMN     "features" "UserFeature"[] DEFAULT ARRAY['SIGNIN']::"UserFeature"[];

-- DropEnum
DROP TYPE "UserFeatures";
