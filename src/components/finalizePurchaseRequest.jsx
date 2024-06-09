import "@/styles/finalizePurchaseRequest.sass";
import "@/styles/globals.sass";

export default function FinalizePurchaseRequest({ onCancel, onConfirm }) {
    return (
        <div className="confirmation-container">
            <div className="confirmation-content">
                <div className="confirmation-title">
                    <h2>Tem certeza que quer finalizar agora?</h2>
                </div>

                <div className="confirmation-buttons">
                    <button id="cancel-btn" onClick={onCancel}>Não</button>
                    <button id="confirm-btn" onClick={onConfirm}>Sim</button>
                </div>
            </div>
        </div>
    );
}
