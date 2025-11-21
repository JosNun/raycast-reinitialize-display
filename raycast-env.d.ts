/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `reinitialize-displays` command */
  export type ReinitializeDisplays = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-reinitialize` command */
  export type QuickReinitialize = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `reinitialize-displays` command */
  export type ReinitializeDisplays = {}
  /** Arguments passed to the `quick-reinitialize` command */
  export type QuickReinitialize = {
  /** Display name (e.g., LG 27UK850) */
  "displayName": string
}
}

declare module "swift:*/display-helper" {
  export function getAllDisplays(): Promise<any[]>;
  export function reinitializeDisplay(displayId: number, method: string): Promise<string>;

  export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}