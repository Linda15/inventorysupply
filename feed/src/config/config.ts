export const config = {
  "dev": {
    "username": process.env.POSTGRESS_INV_USERNAME,
    "password": process.env.POSTGRESS_INV_PASSWORD,
    "database": process.env.POSTGRESS_INV_DATABASE,
    "host": process.env.POSTGRESS_INV_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_INV_MEDIA_BUCKET,
    "url": "http://localhost:8080"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "inventory_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
