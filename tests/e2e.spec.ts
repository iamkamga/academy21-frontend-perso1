import { test, expect } from '@playwright/test';

test.describe('Page d\'accueil', () => {
  test('doit afficher le hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Réinventez');
    await expect(page.locator('text=Rejoindre l\'académie').first()).toBeVisible();
  });
  test('doit afficher les 3 programmes', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=A21 Training').first()).toBeVisible();
    await expect(page.locator('text=LeaderCamp').first()).toBeVisible();
    await expect(page.locator('text=Business Show').first()).toBeVisible();
  });
});

test.describe('Authentification', () => {
  test('doit afficher le formulaire de connexion', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });
  test('doit afficher une erreur pour identifiants incorrects', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'inexistant@test.fr');
    await page.fill('input[type="password"]', 'mauvais');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Identifiants incorrects')).toBeVisible();
  });
  test('doit rediriger vers /login si non connecté', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });
});

test.describe('Rejoindre l\'académie', () => {
  test('doit afficher les programmes et le CTA', async ({ page }) => {
    await page.goto('/rejoindre-academie');
    await expect(page.locator('text=A21 Training').first()).toBeVisible();
    await expect(page.locator('text=Déposer ma candidature').first()).toBeVisible();
  });
});

test.describe('Page candidature', () => {
  test('doit afficher le formulaire', async ({ page }) => {
    await page.goto('/candidature');
    await expect(page.locator('input[name="prenom"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });
  test('doit afficher erreur si champs vides', async ({ page }) => {
    await page.goto('/candidature');
    await page.click('button:has-text("Continuer")');
    await expect(page.locator('text=Veuillez remplir')).toBeVisible();
  });
});

test.describe('Nos valeurs', () => {
  test('doit afficher les valeurs', async ({ page }) => {
    await page.goto('/nos-valeurs');
    await expect(page.locator('text=Foi').first()).toBeVisible();
    await expect(page.locator('text=Ambition').first()).toBeVisible();
  });
});
