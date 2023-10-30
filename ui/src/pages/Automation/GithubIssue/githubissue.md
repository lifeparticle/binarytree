# GithubIssue Component

The `GithubIssue` component is a React component that facilitates the creation of GitHub issues based on data provided through a CSV file. It offers a user-friendly interface to configure various settings, upload a CSV file, and initiate the GitHub issue creation process. The component is built using the Ant Design library and other utility functions.

## Component Structure

The `GithubIssue` component is organized as follows:

1. **Input State**

    - It manages various input states, including GitHub token, owner, repository, file data, and validation status.

2. **Output State**

    - It handles the output state, including progress, error status, and saved GitHub issues.

3. **Handle Upload**

    - A function that parses and processes the uploaded CSV file.

4. **Handle Create GitHub Issue**

    - A function that triggers the creation of GitHub issues based on the provided data.

5. **Rendering**
    - It renders the user interface elements, including configuration settings, CSV file upload, progress indicators, and saved issues display.

## Steps and Progress Tracking

The component uses a step-based progress tracking system, which includes the following steps:

1. **Config**: Initial configuration settings for the GitHub repository and token.
2. **File Uploaded**: A step indicating that a CSV file has been uploaded.
3. **CSV File Validation**: Validation of the CSV file's content.

## User Input and Validation

-   Users can configure their GitHub repository and token.
-   CSV files are uploaded for processing.
-   The component performs validation to ensure that each CSV row contains a "title."

## Error Handling

The component provides error handling for various scenarios, such as invalid GitHub token, network issues, or invalid repository names. It offers solutions and guidance for resolving these errors.

## Handling Continuous Loading

To prevent continuous loading, the component disables the "Create" button under specific conditions, providing a better user experience. The button is also visually updated to indicate when it's in a loading state.

Overall, the `GithubIssue` component simplifies the process of creating GitHub issues from CSV data, streamlining the workflow and providing a user-friendly interface for users to interact with.
