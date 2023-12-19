import MainLayout from "@/Layouts/MainLayout/MainLayout";

function Main({ hotel, hero, paket, tips, foto, moto }) {
    // 'hero', 'foto', 'hotel', 'moto', 'paket', 'tips'
    // console.log(hotel, hero, paket, tips, foto, moto);
    // console.log(paket);
    return (
        <>
            <MainLayout
                dataHero={hero}
                dataFoto={foto}
                dataHotel={hotel}
                dataMoto={moto}
                dataPaket={paket}
                dataTips={tips}
            ></MainLayout>
        </>
    );
}

export default Main;
