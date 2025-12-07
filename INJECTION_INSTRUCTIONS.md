# Hiding the Native Chatwoot Sidebar

To achieve the "Full App Replacement" look where your custom sidebar takes over, you need to hide the native Chatwoot sidebar using CSS injection.

Add the following CSS to your `chatwoot-hooks` repository (e.g., in `app/assets/stylesheets/custom.css` or injected via `application.html.erb`).

## CSS Snippet

```css
/* Hide the main left sidebar of Chatwoot */
/* Note: Class names might vary slightly by Chatwoot version, these are common ones */

/* The main vertical navigation bar */
.sidebar, 
aside.sidebar,
.app-wrapper .left-sidebar {
    display: none !important;
}

/* Enlarge the main content area to fill the void */
.app-wrapper .main-content,
section.main-content {
    margin-left: 0 !important;
    width: 100% !important;
    /* max-width: 100vw !important; */
}

/* Hide the hamburger menu if present on mobile */
.hamburger-menu {
    display: none !important;
}
```

## How to use in `application.html.erb`

If you are editing the layout file directly:

```erb
<style>
  /* Only apply if you want this global, or scope it to specific users/roles if possible */
  .sidebar { display: none !important; }
  .main-content { margin-left: 0 !important; }
</style>
```

## IMPORTANT:
Once hidden, you will lose access to standard Chatwoot "Inbox", "Reports", etc., unless you click specific deep links or disable this CSS. Your new Sidebar needs to handle all necessary navigation!
