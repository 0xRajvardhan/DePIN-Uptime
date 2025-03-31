import { prismaClient } from "db/client";

const USER_ID = "3";

async function seed() {
  await prismaClient.user.create({
    data: {
      id: USER_ID,
      email: "test@test.com",
    },
  });

  const website = await prismaClient.website.create({
    data: {
      url: "https://test.com",
      userId: USER_ID,
    },
  });

  const validator = await prismaClient.validator.create({
    data: {
      publicKey: "0x0000000000000000000000000000000000000000000000000000000000000000",
      location: "Delhi, India",
      ip: "127.0.0.1",
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      validatorId: validator.id,
      status: "Good",
      latency: 100,
      createdAt: new Date(),
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      validatorId: validator.id,
      status: "Good",
      latency: 100,
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      validatorId: validator.id,
      status: "Bad",
      latency: 100,
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
    },
  });
}

seed();
