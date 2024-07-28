
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
	export const P9K_TTY: string;
	export const _P9K_TTY: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLORTERM: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const VSCODE_INJECTION: string;
	export const ZDOTDIR: string;
	export const USER_ZDOTDIR: string;
	export const NX_CLI_SET: string;
	export const NX_INTERACTIVE: string;
	export const NX_DRY_RUN: string;
	export const NX_GENERATE_QUIET: string;
	export const NX_PROJECT_GLOB_CACHE: string;
	export const NX_CACHE_PROJECTS_CONFIG: string;
	export const NODE_ENV: string;
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
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
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
		P9K_TTY: string;
		_P9K_TTY: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		COLORTERM: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_IPC_HOOK_CLI: string;
		VSCODE_INJECTION: string;
		ZDOTDIR: string;
		USER_ZDOTDIR: string;
		NX_CLI_SET: string;
		NX_INTERACTIVE: string;
		NX_DRY_RUN: string;
		NX_GENERATE_QUIET: string;
		NX_PROJECT_GLOB_CACHE: string;
		NX_CACHE_PROJECTS_CONFIG: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
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
