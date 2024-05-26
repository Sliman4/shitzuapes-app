import { Ft } from "$lib/near";
import { FixedNumber } from "@tarnadas/fixed-number";
import { writable } from "svelte/store";

export const shitzuBalance = writable<FixedNumber | null>(null);

export async function refreshShitzuBalance(accountId?: string): Promise<void> {
  if (typeof accountId !== "string") {
    shitzuBalance.set(null);
    return;
  }

  const balance = await Ft.balanceOf("token.0xshitzu.near", accountId, 18);

  shitzuBalance.set(balance);
}
