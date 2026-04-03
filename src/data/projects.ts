export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string;
  status: string;
  features: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "k8s-auto-scaler",
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes controller for scaling pods based on custom metrics.",
    longDescription: "A fully custom Kubernetes controller built in Go that monitors proprietary application metrics (like queue lengths in Kafka/RabbitMQ) and automatically scales Deployments up or down. Built to optimize cloud costs while ensuring zero downtime during extreme traffic spikes.",
    tech: "Go, Kubernetes API",
    status: "ONLINE",
    features: ["Custom Resource Definitions (CRDs)", "Prometheus Integration", "Zero-downtime scaling", "Automated rollbacks"],
    repo: "https://github.com/mridul-roy/k8s-auto-scaler",
  },
  {
    id: "serverless-deployer",
    title: "Serverless Deployer",
    description: "CI/CD tool to instantly deploy functions to AWS Lambda with zero config.",
    longDescription: "An automation pipeline tool designed for developer experience. It abstracts away the complexity of AWS API Gateway, IAM Roles, and Lambda configurations. Developers just push their TypeScript functions, and the deployer packages, uploads, and links everything instantly.",
    tech: "TypeScript, AWS Lambda",
    status: "OFFLINE",
    features: ["Zero-config deployment", "Automated IAM role generation", "Instant API endpoints", "TypeScript out of the box"],
    repo: "https://github.com/mridul-roy/serverless-deployer",
  },
  {
    id: "terraform-grid",
    title: "Terraform Grid",
    description: "High availability multi-cloud infrastructure orchestration module.",
    longDescription: "A scalable Infrastructure as Code (IaC) framework that provisions identical, highly available environments across AWS and GCP simultaneously. Features active-active database replication and global load balancing to ensure 99.999% uptime.",
    tech: "Terraform, AWS, GCP",
    status: "ACTIVE",
    features: ["Multi-cloud failover", "State management with DynamoDB/GCS", "Infrastructure parity test suite", "Modular resource allocation"],
    link: "https://example.com/terraform-grid",
  },
];
