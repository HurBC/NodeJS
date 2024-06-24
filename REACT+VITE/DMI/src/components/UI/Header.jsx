import { flex } from "../../assets/Constants/Displays";
import { urls } from "../../assets/Constants/ImgURL";
import { Container } from "./Container";
import { Nav } from "./Nav";

export function Header () {
  return (
    <>
      <Container fw height={"h-16"} S={`flex gap-14 ${flex.setFlex({ val1: "JCS" })}`} bgColor="bg-DMI">
        <img src={urls.DMIAcronyms} alt="DMI-logo" width={60} />
        <Nav fw />
      </Container>
    </>
  )
}