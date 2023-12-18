import ItemsPaket from "@/Components/ItemPaket/ItemsPaket";
import Authenticated from "@/Layouts/AuthenticatedLayout";

function PaketIndex() {
    return (
        <>
            <Authenticated>
                <div className="flex flex-col">
                    <ItemsPaket />
                    <div className="flex items-center justify-end mx-10">
                        <button>add new +</button>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}

export default PaketIndex;
