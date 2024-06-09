import "@/styles/deleteProductConfirm.sass";
import "@/styles/globals.sass";

export default function DeleteProductConfirm({ onCancel, onConfirm }) {
    return (
        <div className="deleteConfirmContainer">
            <div className="deleteConfirmContent">
                <div className="deleteConfirmTitle">
                    <h2>Tem certeza que deseja excluir este produto?</h2>
                </div>

                <div className="deleteConfirmButtons">
                    <button id="cancel-btn" onClick={onCancel}>Cancelar</button>
                    <button id="confirm-btn" onClick={onConfirm}>Excluir</button>
                </div>
            </div>
        </div>
    );
}