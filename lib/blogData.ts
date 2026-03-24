export const blogs = [
  {
    title: "Building a DevSecOps CI/CD Pipeline on AWS — What I Learned and What I Broke",
    summary:
      "I built a full end-to-end CI/CD pipeline that takes a YouTube clone app from a GitHub push all the way to a live deployment on Kubernetes; with security scanning, monitoring, and email notifications baked in. Terraform provisioned the infra, Jenkins ran the pipeline, SonarQube and Trivy kept things secure, and Prometheus + Grafana watched over everything.\n\nBut honestly, the tools are only half the story. The other half is a Terraform module realization that came about an hour too late, a single letter typo that killed my pipeline while I was in the bathroom, and another one that took 15 minutes of retracing to find.\n\nIf you're a DevOps student looking for a project that actually teaches you something — this one's worth the read.",
    readTime: "8 min read",
    tags: ["DevOps", "AWS", "CI/CD", "Kubernetes"],
    medium: "https://medium.com/@malpanisidharth.work/building-a-devsecops-ci-cd-pipeline-on-aws-what-i-learned-and-what-i-broke-1a5831c042ba",
    date: "March 2026",
    issue: "Vol. 1",
  },
];
