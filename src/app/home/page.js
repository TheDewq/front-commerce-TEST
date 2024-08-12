import Banner from "@/components/home/banner/banner";
import MainLayout from "@/layout/main/main-layout";

export default ()=>{
    return(
        <MainLayout isContainer={true}>
            <Banner/>
        </MainLayout>
    )
}