import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import placeholderImg from "@/assets/images/githubdp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Backend Developer",
    location: "Self-employed",
    description:
      "Developed a 360-degree virtual tour app, an AI-driven online pharmacy backend, a tea market backend, a template website for Owadanulke, and extended Lemmer CRM for Kip Engineering using technologies such as NestJS, ExpressJS, PostgreSQL and Sequelize.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Present",
  },
  {
    title: "Backend Developer",
    location: "Gozle",
    description:
      "Developed a YouTube-like video platform using NestJS, PostgreSQL, RabbitMQ and Redis. Project was closed before launch.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Backend Developer",
    location: "100haryt.com",
    description:
      "Built and maintained picker app backend, main backend, discounts service and other microservices using gRPC, NestJS and RabbitMQ for Turkmenistan's leading marketplace.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - May 2025",
  },
  {
    title: "Backend Developer",
    location: "Bereket-Bendi",
    description:
      "Continued developing Dinle, a microservices-based music app.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Present",
  },
  {
    title: "Software Engineer",
    location: "Kip Engineering",
    description:
      "Developed and maintained company CRM (Lemmer) for several organizations and improved network infrastructure while supporting the main website and office tools.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - Present",
  },
  {
    title: "Backend Developer",
    location: "Oguz Han Scientific and Technological Center",
    description:
      "Developed Zemin mobile football arena booking and market app and built a feature-rich CRM for course centers with salary calculations and management using a TypeScript monorepo with Redis, GraphQL, NestJS and Fastify.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "360° Virtual Tour App",
    description:
      "Developed a 360-degree virtual tour app for university.",
    icons: [
      "logos:javascript",
      "logos:express",
      "logos:threejs",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "AI-integrated Online Pharmacy Backend",
    description:
      "Backend with AI-based syndrome search and price comparison.",
    icons: [
      "logos:express",
      "logos:graphql",
      "logos:postgresql",
      "logos:sequelize",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Tea Market Web Backend",
    description:
      "Backend for a tea market website.",
    icons: [
      "logos:express",
      "logos:postgresql",
      "logos:sequelize",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Owadanulke Website",
    description:
      "Template website backend for Owadanulke.",
    icons: [
      "logos:nestjs",
      "logos:sequelize",
      "logos:postgresql",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Lemmer CRM for Kip Engineering",
    description:
      "Added new unit and maintained Lemmer CRM.",
    icons: [
      "logos:nestjs",
      "logos:postgresql",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Dinle Music App",
    description:
      "Microservices-based music app backend.",
    icons: [
      "logos:nestjs",
      "logos:rabbitmq-icon",
      "carbon:microservices",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Zemin Football Arena App",
    description:
      "Mobile football arena booking and market app.",
    icons: [
      "logos:typescript-icon",
      "logos:nestjs",
      "logos:fastify",
    ],
    imageUrl: placeholderImg,
  },
  {
    title: "Course Center CRM",
    description:
      "Feature-rich CRM for course centers with salary calculations and management.",
    icons: [
      "logos:typescript-icon",
      "logos:redis",
      "logos:graphql",
      "logos:nestjs",
      "logos:fastify",
    ],
    imageUrl: placeholderImg,
  },
] as const;

export const skillsData = [
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "ExpressJS",
    icon: "logos:express",
  },
  {
    name: "Fastify",
    icon: "logos:fastify",
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
  },
  {
    name: "AdonisJS",
    icon: "devicon:adonisjs",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MSSQL",
    icon: "logos:microsoft-sql-server",
  },
  {
    name: "MariaDB",
    icon: "logos:mariadb",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Redis",
    icon: "logos:redis",
  },
  {
    name: "gRPC",
    icon: "logos:grpc",
  },
  {
    name: "Kafka",
    icon: "logos:apache-kafka",
  },
  {
    name: "RabbitMQ",
    icon: "logos:rabbitmq-icon",
  },
  {
    name: "BullMQ",
    icon: "simple-icons:bullmq",
  },
  {
    name: "Sequelize",
    icon: "logos:sequelize",
  },
  {
    name: "TypeORM",
    icon: "logos:typeorm",
  },
  {
    name: "Microservices",
    icon: "carbon:microservices",
  },
  {
    name: "Networking",
    icon: "mdi:network",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AI integration",
    icon: "logos:openai",
  },
] as const;
