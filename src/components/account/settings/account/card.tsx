"use client";
import Buttons from "../buttons";
import DeleteAccount from "./del_account";
import ProfileDetails from "./profile_details";

export default function SettingsAcount() {
  return (
    <Buttons>
      <ProfileDetails />
      <DeleteAccount />
    </Buttons>
  );
}
