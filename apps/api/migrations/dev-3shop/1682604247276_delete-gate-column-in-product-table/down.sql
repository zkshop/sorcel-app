ALTER TABLE product
ADD COLUMN "poapId" INTEGER,
ADD COLUMN "collection" TEXT,
ADD COLUMN "curation" TEXT,
ADD COLUMN "discount" INTEGER,
ADD COLUMN "isDiscountGated" BOOLEAN DEFAULT FALSE;