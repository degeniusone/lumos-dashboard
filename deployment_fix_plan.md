# Deployment Fix Plan

## Objective
Deploy the `lumos-dashboard` application on EasyPanel with the correct environment variables.

## Steps

### 1. Configure Environment Variables
- **Status:** Pending
- **Action:** Navigate to EasyPanel Environment settings.
- **Variables:**
  - `DATABASE_URL` (Internal Postgres Connection)
  - `EMR_API_URL` (https://api.emr-provider.com)
  - `EMR_API_KEY` (secret)
- **Method:** Retry input using direct JavaScript execution or careful keyboard simulation, verifying content visibility before saving.

### 2. Trigger Deployment
- **Status:** Pending
- **Action:** Click "Deploy" after saving environment variables.
- **Verification:** Check for "Building" or "Running" status.

### 3. Verify Live Application
- **Status:** Pending
- **Action:** Open the deployed application URL.
- **Verification:** Check that the application loads and can connect to the database (e.g., Treatments loaded).
