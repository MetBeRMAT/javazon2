const Homepage = (props) =>
{
    return (
        <>
            <div>
                <div>
                    <h4 className="fst-italic mx-5 my-5 fs-5 text-sm-start text-break">Benvenuti nella nostra azienda dedicata al mondo di Java, un'eccellente piattaforma di sviluppo che è il cuore pulsante di molte applicazioni e soluzioni software innovative. Con una passione contagiosa per l'eccellenza tecnologica, ci impegniamo a offrire servizi e prodotti di altissima qualità nel campo dello sviluppo Java. Il nostro team di esperti sviluppatori è impegnato nella creazione di soluzioni personalizzate, dalla progettazione all'implementazione, garantendo che ogni applicazione sia robusta, scalabile e all'avanguardia. Siamo fieri di essere all'avanguardia nel mondo Java, contribuendo al successo e alla crescita delle aziende attraverso la potenza di questa straordinaria tecnologia.</h4>
                </div>
                <div className="container">
                    <div class="row justify-content-around">
                        <div class="col-4 me-5 my-5">
                            <h4 className="mb-5 text-center">Siamo qui:</h4>
                            <img src="https://lh3.googleusercontent.com/VKEIvvokZHFk7Sw1pNk9VChgkXzN_Jz8oYr5JHIK4qeHZtCDwDUuy_qh6O4S3Qb2oyGe6kBSvmOw5xlDguenjeENosM8TTfDUsZvIeY=w609" class="float-start img-thumbnail"></img>
                        </div>
                        <div class="col-4 ms-5 my-5">
                            <h4 className="text-center mb-5">Contacts</h4>
                            <h5 className="mb-4">Email: Javazon.user123@gmail.com</h5>
                            <h5 className="mb-4">Phone: 060987623</h5>
                            <h5 className="mb-4">Fax: 555-5678</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;