"use client";
import Buttons from "../buttons";
import Settings2FA from "./2fa";
import Devices from "./devices";
import SettingsPassword from "./password";

export default function SettingsSecurity() {
  return (
    <Buttons>
      <SettingsPassword />
      <Settings2FA />
      <Devices />
    </Buttons>
  );
}
