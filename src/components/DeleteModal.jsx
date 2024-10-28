import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteSalaModal = ({ onDelete, salaId }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirmDelete = (salaId) => {
        onDelete(salaId);
        handleClose();
    };

    return (
        <>
            {/* Pulsante per aprire il modale */}
            <Button variant="outline-danger" onClick={handleShow}>
                Elimina Sala
            </Button>

            {/* Modale di conferma */}
            <Modal className='text-light bg-transparent' show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title className=''>
                        <h1 className=' h4'> Conferma eliminazione</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <p className='fs-5'>Cliccare su &quot;conferma per eliminare la sala&quot;</p>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Annulla
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Conferma Eliminazione
                    </Button>
                </Modal.Footer> */}

                <div className='bg-dark p-4 '>
                    <h1> Conferma Eliminazione</h1>
                    <hr />
                    <p>Sei sicuro di voler eliminare la sala?</p>
                    <hr />
                    <div className=' d-flex justify-content-end gap-3'>
                        <Button variant="secondary" onClick={handleClose}>
                            Annulla
                        </Button>
                        <Button variant="danger" onClick={() => confirmDelete(salaId)}>
                            Conferma Eliminazione
                        </Button>
                    </div>

                </div>
            </Modal>
        </>
    );
};

export default DeleteSalaModal;
