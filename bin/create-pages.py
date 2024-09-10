# flake8: noqa: E501

import os


# Script used to create the pages for the site
modules = {
    "fundamentals-of-testing/what-is-testing": "What is Testing?",
    "fundamentals-of-testing/testing-and-debugging": "Testing and Debugging",
    "fundamentals-of-testing/why-is-testing-necessary": "Why is Testing Necessary?",
    "fundamentals-of-testing/testings-contributions-success": "Testing’s Contributions to Success",
    "fundamentals-of-testing/testing-and-qa": "Testing and Quality Assurance (QA)",
    "fundamentals-of-testing/errors-defects-failures-root-causes": "Errors, Defects, Failures, and Root Causes",
    "fundamentals-of-testing/testing-principles": "Testing Principles",
    "fundamentals-of-testing/test-activities-tasks": "Test Activities and Tasks",
    "fundamentals-of-testing/test-process-context": "Test Process in Context",
    "fundamentals-of-testing/testware": "Testware",
    "fundamentals-of-testing/traceability-test-basis-work-products": "Traceability Between the Test Basis and Test Work Products",
    "fundamentals-of-testing/testing-roles": "Testing Roles",
    "fundamentals-of-testing/generic-skills-required": "Generic Skills Required for Testing",
    "fundamentals-of-testing/whole-team-approach": "Whole Team Approach",
    "fundamentals-of-testing/advantages-whole-team-approach": "Advantages of the Whole Team Approach",
    "fundamentals-of-testing/independence-of-testing": "Independence of Testing",
    "fundamentals-of-testing/levels-of-independence": "Levels of Independence",
    "testing-throughout-lifecycle/software-development-testing": "Software Development and Software Testing",
    "testing-throughout-lifecycle/sdlc-models": "Software Development Life Cycle Models",
    "testing-throughout-lifecycle/impact-of-sdlc-on-testing": "Impact of the Software Development Lifecycle on Testing",
    "testing-throughout-lifecycle/sdlc-good-testing-practices": "Software Development Lifecycle and Good Testing Practices",
    "testing-throughout-lifecycle/software-development-models": "Software Development Models",
    "testing-throughout-lifecycle/testing-driver-development": "Testing as a Driver for Software Development",
    "testing-throughout-lifecycle/devops-testing": "DevOps and Testing",
    "testing-throughout-lifecycle/shift-left-approach": "Shift Left Approach",
    "testing-throughout-lifecycle/retrospectives-process-improvement": "Retrospectives and Process Improvement",
    "testing-throughout-lifecycle/test-levels": "Test Levels",
    "testing-throughout-lifecycle/component-testing": "Component Testing",
    "testing-throughout-lifecycle/integration-testing": "Integration Testing",
    "testing-throughout-lifecycle/system-testing": "System Testing",
    "testing-throughout-lifecycle/sit": "System Integration Testing (SIT)",
    "testing-throughout-lifecycle/acceptance-testing": "Acceptance Testing",
    "testing-throughout-lifecycle/test-types": "Test Types",
    "testing-throughout-lifecycle/confirmation-regression-testing": "Confirmation Testing and Regression Testing",
    "testing-throughout-lifecycle/maintenance-testing": "Maintenance Testing",
    "static-testing/static-testing-basics": "Static Testing Basics",
    "static-testing/work-products-static-testing": "Work Products Examinable by Static Testing",
    "static-testing/value-static-testing": "Value of Static Testing",
    "static-testing/differences-static-dynamic-testing": "Differences between Static Testing and Dynamic Testing",
    "static-testing/feedback-review-process": "Feedback and Review Process",
    "static-testing/review-process-activities": "Review Process Activities",
    "static-testing/review-roles-responsibilities": "Roles and Responsibilities in Reviews",
    "static-testing/review-types": "Review Types",
    "static-testing/success-factors-reviews": "Success Factors for Reviews",
    "test-analysis-design/test-techniques-overview": "Test Techniques Overview",
    "test-analysis-design/equivalence-partitioning": "Equivalence Partitioning",
    "test-analysis-design/boundary-value-analysis": "Boundary Value Analysis",
    "test-analysis-design/decision-table-testing": "Decision Table Testing",
    "test-analysis-design/state-transition-testing": "State Transition Testing",
    "test-analysis-design/white-box-techniques": "White-box Test Techniques",
    "test-analysis-design/statement-testing-coverage": "Statement Testing and Statement Coverage",
    "test-analysis-design/branch-testing-coverage": "Branch Testing and Branch Coverage",
    "test-analysis-design/value-white-box-testing": "The Value of White-box Testing",
    "test-analysis-design/error-guessing": "Error Guessing",
    "test-analysis-design/exploratory-testing": "Exploratory Testing",
    "test-analysis-design/checklist-based-testing": "Checklist-Based Testing",
    "test-analysis-design/collaboration-based-approaches": "Collaboration-based Test Approaches",
    "test-analysis-design/ecommerce-website-checkout": "Example 1: E-Commerce Website Checkout Feature",
    "test-analysis-design/hospital-management-software": "Example 2: Hospital Management Software",
    "managing-test-activities/test-plan-content": "Purpose and Content of a Test Plan",
    "managing-test-activities/tester-contribution-planning": "Tester's Contribution to Iteration and Release Planning",
    "managing-test-activities/entry-exit-criteria": "Entry Criteria and Exit Criteria",
    "managing-test-activities/estimation-techniques": "Estimation Techniques",
    "managing-test-activities/test-case-prioritisation": "Test Case Prioritisation",
    "managing-test-activities/test-pyramid": "Test Pyramid",
    "managing-test-activities/testing-quadrants": "Testing Quadrants",
    "managing-test-activities/risk-definition": "Risk Definition",
    "managing-test-activities/risk-attributes": "Risk Attributes",
    "managing-test-activities/project-product-risks": "Project and Product Risks",
    "managing-test-activities/product-risk-analysis": "Product Risk Analysis",
    "managing-test-activities/risk-control": "Risk Control",
    "managing-test-activities/test-monitoring": "Test Monitoring",
    "managing-test-activities/test-reporting": "Test Reporting",
    "managing-test-activities/communicating-testing-status": "Communicating the Status of Testing",
    "managing-test-activities/configuration-management": "Configuration Management",
    "managing-test-activities/defect-management": "Defect Management",
    "test-tools/meaning-purpose-tool-support": "The Meaning and Purpose of Tool Support",
    "test-tools/tool-support-testing": "Tool Support for Testing",
    "test-tools/benefits-risks-test-automation": "Benefits and Risks of Test Automation",
}

# Create directories and files with frontmatter
for path, title in modules.items():
    if title.find(":") > 0:
        title = f">\n  {title}"
    # Create the directory if it doesn't exist
    dir_name = os.path.dirname(path)
    if not os.path.exists(dir_name):
        os.makedirs(dir_name)

    # Create the .mdx file with frontmatter
    file_path = f"{path}.mdx"
    with open(file_path, "w") as f:
        f.write("---\n")
        f.write(f"title: {title}\n")
        f.write("---\n")
        f.write(
            """
import FAQList from "../../../../components/faq-list.astro";
import FAQ from "../../../../components/faq.astro";

## Review Questions

<FAQList title="FAQs">
  <FAQ title="Question 1?">
    Question 1 answer.
  </FAQ>
</FAQList>"""
        )
