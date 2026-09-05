import { test, expect } from '@playwright/test';

test.describe('Enrollment Flow', () => {
  test('should navigate from personal info to payment step', async ({ page }) => {
    await page.goto('/formations/ia-marketing-reseau/inscription');

    // Fill out required fields
    await page.fill('input[name="prenom"]', 'John');
    await page.fill('input[name="nom"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="telephone"]', '+33612345678');

    // Submit form
    await page.click('button:has-text("Continuer vers le paiement")');

    // Check if we are on the payment step
    await expect(page.locator('text=Choisir votre mode de paiement')).toBeVisible();
    await expect(page.locator('text=John Doe')).toBeVisible();
  });

  test('should show error if required fields are missing', async ({ page }) => {
    await page.goto('/formations/ia-marketing-reseau/inscription');

    // Submit without filling fields
    await page.click('button:has-text("Continuer vers le paiement")');

    // Check for error message
    await expect(page.locator('text=Veuillez remplir tous les champs obligatoires.')).toBeVisible();
  });

  test('should have payment options visible', async ({ page }) => {
    await page.goto('/formations/ia-marketing-reseau/inscription');

    // Fill out required fields to reach payment step
    await page.fill('input[name="prenom"]', 'John');
    await page.fill('input[name="nom"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="telephone"]', '+33612345678');
    await page.click('button:has-text("Continuer vers le paiement")');

    // Verify payment buttons
    await expect(page.locator('text=Payer par carte bancaire')).toBeVisible();
    await expect(page.locator('text=Payer via PayPal')).toBeVisible();
  });
});
