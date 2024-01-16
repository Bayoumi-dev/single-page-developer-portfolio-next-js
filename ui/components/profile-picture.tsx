import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className="overflow-hidden">
      <Image
        className="md:hidden"
        src="/assets/images/image-profile-mobile.webp"
        width={174}
        height={383}
        alt="Adam Keyes profile image"
      />
      <Image
        className="hidden md:block xl:hidden"
        src="/assets/images/image-profile-tablet.webp"
        width={322}
        height={600}
        alt="Adam Keyes profile image"
      />
      <Image
        className="hidden xl:block"
        src="/assets/images/image-profile-desktop.webp"
        width={445}
        height={720}
        alt="Adam Keyes profile image"
      />
    </div>
  );
}
