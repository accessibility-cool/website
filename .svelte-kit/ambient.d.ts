
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const USER: string;
	export const VSCODE_WSL_EXT_LOCATION: string;
	export const WT_PROFILE_ID: string;
	export const SHLVL: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const WSL_DISTRO_NAME: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const PULSE_SERVER: string;
	export const WSL_INTEROP: string;
	export const NAME: string;
	export const _: string;
	export const TERM: string;
	export const PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const WT_SESSION: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const SHELL: string;
	export const PWD: string;
	export const HOSTTYPE: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const WSLENV: string;
	export const VSCODE_HANDLES_SIGPIPE: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const MANPATH: string;
	export const INFOPATH: string;
	export const ZSH: string;
	export const PAGER: string;
	export const LESS: string;
	export const LSCOLORS: string;
	export const LS_COLORS: string;
	export const YSU_VERSION: string;
	export const P9K_SSH: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_NLS_CONFIG: string;
	export const P9K_TTY: string;
	export const _P9K_TTY: string;
	export const VSCODE_CWD: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const WALLABY_PRODUCTION: string;
	export const NODE_ENV: string;
	export const __NEXT_PRIVATE_STANDALONE_CONFIG: string;
	export const PORT: string;
	export const __NEXT_PRIVATE_ORIGIN: string;
	export const NX_WORKSPACE_ROOT_PATH: string;
	export const ELECTRON_NO_ASAR: string;
	export const CI: string;
	export const NX_PROJECT_GLOB_CACHE: string;
	export const NX_CACHE_PROJECTS_CONFIG: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		USER: string;
		VSCODE_WSL_EXT_LOCATION: string;
		WT_PROFILE_ID: string;
		SHLVL: string;
		HOME: string;
		OLDPWD: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		WSL_DISTRO_NAME: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		PULSE_SERVER: string;
		WSL_INTEROP: string;
		NAME: string;
		_: string;
		TERM: string;
		PATH: string;
		XDG_RUNTIME_DIR: string;
		WT_SESSION: string;
		DISPLAY: string;
		LANG: string;
		SHELL: string;
		PWD: string;
		HOSTTYPE: string;
		WSL2_GUI_APPS_ENABLED: string;
		WSLENV: string;
		VSCODE_HANDLES_SIGPIPE: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_REPOSITORY: string;
		MANPATH: string;
		INFOPATH: string;
		ZSH: string;
		PAGER: string;
		LESS: string;
		LSCOLORS: string;
		LS_COLORS: string;
		YSU_VERSION: string;
		P9K_SSH: string;
		VSCODE_AMD_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_NLS_CONFIG: string;
		P9K_TTY: string;
		_P9K_TTY: string;
		VSCODE_CWD: string;
		ELECTRON_RUN_AS_NODE: string;
		VSCODE_IPC_HOOK_CLI: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		WALLABY_PRODUCTION: string;
		NODE_ENV: string;
		__NEXT_PRIVATE_STANDALONE_CONFIG: string;
		PORT: string;
		__NEXT_PRIVATE_ORIGIN: string;
		NX_WORKSPACE_ROOT_PATH: string;
		ELECTRON_NO_ASAR: string;
		CI: string;
		NX_PROJECT_GLOB_CACHE: string;
		NX_CACHE_PROJECTS_CONFIG: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
