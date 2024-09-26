import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://ryan-blunden.github.io/istqb-foundations-4.0-notes/",
  base: "istqb-foundations-4.0-notes",
  integrations: [
    starlight({
      title: "ISTQB Foundation Level 4.0 Course Notes",
      social: {
        github: "https://github.com/ryan-blunden/istqb-foundations-4.0-notes/",
      },
      sidebar: [
        {
          label: "Fundamentals of Testing",
          items: [
            {
              label: "What is Testing",
              items: [
                {
                  label: "What is Testing?",
                  slug: "guides/fundamentals-of-testing/what-is-testing",
                },
                {
                  label: "Testing and Debugging",
                  slug: "guides/fundamentals-of-testing/testing-and-debugging",
                },
              ],
            },
            {
              label: "Why is Testing Necessary",
              items: [
                {
                  label: "Why is Testing Necessary?",
                  slug: "guides/fundamentals-of-testing/why-is-testing-necessary",
                },
                {
                  label: "Testing’s Contributions to Success",
                  slug: "guides/fundamentals-of-testing/testings-contributions-success",
                },
                {
                  label: "Testing and Quality Assurance (QA)",
                  slug: "guides/fundamentals-of-testing/testing-and-qa",
                },
                {
                  label: "Errors, Defects, Failures, and Root Causes",
                  slug: "guides/fundamentals-of-testing/errors-defects-failures-root-causes",
                },
              ],
            },
            {
              label: "Testing Principles",
              items: [
                {
                  label: "Testing Principles",
                  slug: "guides/fundamentals-of-testing/testing-principles",
                },
              ],
            },
            {
              label: "Test Activities, Testware and Test Roles",
              items: [
                {
                  label: "Test Activities and Tasks",
                  slug: "guides/fundamentals-of-testing/test-activities-tasks",
                },
                {
                  label: "Test Process in Context",
                  slug: "guides/fundamentals-of-testing/test-process-context",
                },
                {
                  label: "Testware",
                  slug: "guides/fundamentals-of-testing/testware",
                },
                {
                  label:
                    "Traceability Between the Test Basis and Test Work Products",
                  slug: "guides/fundamentals-of-testing/traceability-test-basis-work-products",
                },
                {
                  label: "Testing Roles",
                  slug: "guides/fundamentals-of-testing/testing-roles",
                },
              ],
            },
            {
              label: "Essential Skills and Good Practices in Testing",
              items: [
                {
                  label: "Generic Skills Required for Testing",
                  slug: "guides/fundamentals-of-testing/generic-skills-required",
                },
                {
                  label: "Whole Team Approach",
                  slug: "guides/fundamentals-of-testing/whole-team-approach",
                },
                {
                  label: "Advantages of the Whole Team Approach",
                  slug: "guides/fundamentals-of-testing/advantages-whole-team-approach",
                },
                {
                  label: "Independence of Testing",
                  slug: "guides/fundamentals-of-testing/independence-of-testing",
                },
                {
                  label: "Levels of Independence",
                  slug: "guides/fundamentals-of-testing/levels-of-independence",
                },
              ],
            },
          ],
        },
        {
          label: "Testing Throughout the Software Development Lifecycle",
          items: [
            {
              label:
                "Testing in the Context of a Software Development Lifecycle",
              items: [
                {
                  label: "Software Development and Software Testing",
                  slug: "guides/testing-throughout-lifecycle/software-development-testing",
                },
                {
                  label: "Software Development Life Cycle Models",
                  slug: "guides/testing-throughout-lifecycle/sdlc-models",
                },
                {
                  label:
                    "Impact of the Software Development Lifecycle on Testing",
                  slug: "guides/testing-throughout-lifecycle/impact-of-sdlc-on-testing",
                },
                {
                  label:
                    "Software Development Lifecycle and Good Testing Practices",
                  slug: "guides/testing-throughout-lifecycle/sdlc-good-testing-practices",
                },
                {
                  label: "Software Development Models",
                  slug: "guides/testing-throughout-lifecycle/software-development-models",
                },
                {
                  label: "Testing as a Driver for Software Development",
                  slug: "guides/testing-throughout-lifecycle/testing-driver-development",
                },
                {
                  label: "DevOps and Testing",
                  slug: "guides/testing-throughout-lifecycle/devops-testing",
                },
                {
                  label: "Shift Left Approach",
                  slug: "guides/testing-throughout-lifecycle/shift-left-approach",
                },
                {
                  label: "Retrospectives and Process Improvement",
                  slug: "guides/testing-throughout-lifecycle/retrospectives-process-improvement",
                },
              ],
            },
            {
              label: "Test Levels and Test Types",
              items: [
                {
                  label: "Test Levels",
                  slug: "guides/testing-throughout-lifecycle/test-levels",
                },
                {
                  label: "Component Testing",
                  slug: "guides/testing-throughout-lifecycle/component-testing",
                },
                {
                  label: "Integration Testing",
                  slug: "guides/testing-throughout-lifecycle/integration-testing",
                },
                {
                  label: "System Testing",
                  slug: "guides/testing-throughout-lifecycle/system-testing",
                },
                {
                  label: "System Integration Testing (SIT)",
                  slug: "guides/testing-throughout-lifecycle/sit",
                },
                {
                  label: "Acceptance Testing",
                  slug: "guides/testing-throughout-lifecycle/acceptance-testing",
                },
                {
                  label: "Test Types",
                  slug: "guides/testing-throughout-lifecycle/test-types",
                },
                {
                  label: "Confirmation Testing and Regression Testing",
                  slug: "guides/testing-throughout-lifecycle/confirmation-regression-testing",
                },
              ],
            },
            {
              label: "Maintenance Testing",
              items: [
                {
                  label: "Maintenance Testing",
                  slug: "guides/testing-throughout-lifecycle/maintenance-testing",
                },
              ],
            },
          ],
        },
        {
          label: "Static Testing",
          items: [
            {
              label: "Static Testing Basics",
              items: [
                {
                  label: "Static Testing Basics",
                  slug: "guides/static-testing/static-testing-basics",
                },
                {
                  label: "Work Products Examinable by Static Testing",
                  slug: "guides/static-testing/work-products-static-testing",
                },
                {
                  label: "Value of Static Testing",
                  slug: "guides/static-testing/value-static-testing",
                },
                {
                  label:
                    "Differences between Static Testing and Dynamic Testing",
                  slug: "guides/static-testing/differences-static-dynamic-testing",
                },
              ],
            },
            {
              label: "Feedback and Review Process",
              items: [
                {
                  label: "Feedback and Review Process",
                  slug: "guides/static-testing/feedback-review-process",
                },
                {
                  label: "Review Process Activities",
                  slug: "guides/static-testing/review-process-activities",
                },
                {
                  label: "Roles and Responsibilities in Reviews",
                  slug: "guides/static-testing/review-roles-responsibilities",
                },
                {
                  label: "Review Types",
                  slug: "guides/static-testing/review-types",
                },
                {
                  label: "Success Factors for Reviews",
                  slug: "guides/static-testing/success-factors-reviews",
                },
              ],
            },
          ],
        },
        {
          label: "Test Analysis and Design",
          items: [
            {
              label: "Test Techniques Overview",
              items: [
                {
                  label: "Test Techniques Overview",
                  slug: "guides/test-analysis-design/test-techniques-overview",
                },
              ],
            },
            {
              label: "Black-box Test Techniques",
              items: [
                {
                  label: "Equivalence Partitioning",
                  slug: "guides/test-analysis-design/equivalence-partitioning",
                },

                {
                  label: "Boundary Value Analysis",
                  slug: "guides/test-analysis-design/boundary-value-analysis",
                },

                {
                  label: "Decision Table Testing",
                  slug: "guides/test-analysis-design/decision-table-testing",
                },

                {
                  label: "State Transition Testing",
                  slug: "guides/test-analysis-design/state-transition-testing",
                },
              ],
            },
            {
              label: "White-box Test Techniques",
              items: [
                {
                  label: "White-box Test Techniques",
                  slug: "guides/test-analysis-design/white-box-techniques",
                },
                {
                  label: "Statement Testing and Statement Coverage",
                  slug: "guides/test-analysis-design/statement-testing-coverage",
                },
                {
                  label: "Branch Testing and Branch Coverage",
                  slug: "guides/test-analysis-design/branch-testing-coverage",
                },
                {
                  label: "The Value of White-box Testing",
                  slug: "guides/test-analysis-design/value-white-box-testing",
                },
              ],
            },
            {
              label: "Experience-based Test Techniques",
              items: [
                {
                  label: "Error Guessing",
                  slug: "guides/test-analysis-design/error-guessing",
                },
                {
                  label: "Exploratory Testing",
                  slug: "guides/test-analysis-design/exploratory-testing",
                },
                {
                  label: "Checklist-Based Testing",
                  slug: "guides/test-analysis-design/checklist-based-testing",
                },
              ],
            },
            {
              label: "Collaboration-based Test Approaches",
              items: [
                {
                  label: "Collaboration-based Test Approaches",
                  slug: "guides/test-analysis-design/collaboration-based-approaches",
                },
                {
                  label: "Example 1: E-Commerce Website Checkout Feature",
                  slug: "guides/test-analysis-design/ecommerce-website-checkout",
                },
                {
                  label: "Example 2: Hospital Management Software",
                  slug: "guides/test-analysis-design/hospital-management-software",
                },
              ],
            },
          ],
        },
        {
          label: "Managing the Test Activities",
          items: [
            {
              label: "Test Planning",
              items: [
                {
                  label: "Purpose and Content of a Test Plan",
                  slug: "guides/managing-test-activities/test-plan-content",
                },
                {
                  label:
                    "Tester's Contribution to Iteration and Release Planning",
                  slug: "guides/managing-test-activities/tester-contribution-planning",
                },
                {
                  label: "Entry Criteria and Exit Criteria",
                  slug: "guides/managing-test-activities/entry-exit-criteria",
                },
                {
                  label: "Estimation Techniques",
                  slug: "guides/managing-test-activities/estimation-techniques",
                },
                {
                  label: "Test Case Prioritisation",
                  slug: "guides/managing-test-activities/test-case-prioritisation",
                },
                {
                  label: "Test Pyramid",
                  slug: "guides/managing-test-activities/test-pyramid",
                },
                {
                  label: "Testing Quadrants",
                  slug: "guides/managing-test-activities/testing-quadrants",
                },
              ],
            },
            {
              label: "Risk Management",
              items: [
                {
                  label: "Risk Definition",
                  slug: "guides/managing-test-activities/risk-definition",
                },
                {
                  label: "Risk Attributes",
                  slug: "guides/managing-test-activities/risk-attributes",
                },
                {
                  label: "Project and Product Risks",
                  slug: "guides/managing-test-activities/project-product-risks",
                },
                {
                  label: "Product Risk Analysis",
                  slug: "guides/managing-test-activities/product-risk-analysis",
                },
                {
                  label: "Risk Control",
                  slug: "guides/managing-test-activities/risk-control",
                },
              ],
            },
            {
              label: "Test Monitoring, Test Control and Test Completion",
              items: [
                {
                  label: "Test Monitoring",
                  slug: "guides/managing-test-activities/test-monitoring",
                },
                {
                  label: "Test Reporting",
                  slug: "guides/managing-test-activities/test-reporting",
                },
                {
                  label: "Communicating the Status of Testing",
                  slug: "guides/managing-test-activities/communicating-testing-status",
                },
              ],
            },
            {
              label: "Configuration Management",
              items: [
                {
                  label: "Configuration Management",
                  slug: "guides/managing-test-activities/configuration-management",
                },
              ],
            },
            {
              label: "Defect Management",
              items: [
                {
                  label: "Defect Management",
                  slug: "guides/managing-test-activities/defect-management",
                },
              ],
            },
          ],
        },
        {
          label: "Test Tools",
          items: [
            {
              label: "Tool Support for Testing",
              items: [
                {
                  label: "The Meaning and Purpose of Tool Support",
                  slug: "guides/test-tools/meaning-purpose-tool-support",
                },
                {
                  label: "Tool Support for Testing",
                  slug: "guides/test-tools/tool-support-testing",
                },
              ],
            },
            {
              label: "Benefits and Risks of Test Automation",
              items: [
                {
                  label: "Benefits and Risks of Test Automation",
                  slug: "guides/test-tools/benefits-risks-test-automation",
                },
              ],
            },
          ],
        },
        {
          label: "Other Resources",
          items: [
            {
              label: "General Insights",
              slug: "guides/general-insights",
            },
            {
              label: "Interview Questions",
              slug: "guides/interview-questions",
            },
          ],
        },
      ],
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
    }),
    tailwind(),
    mdx(),
  ],
});
