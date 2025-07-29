'use client';

import type { ServiceWithContent } from '@/types/services';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// This component is now customized for Rhinoplasty
export default function RhinoplastyPage({ service }: { service: ServiceWithContent }) {
    const t = useTranslations('Services.items.op-hunde');
    const tDetails = useTranslations('ServiceDetailsPage');
    const serviceName = t('name');

    return (
        <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-strong:text-foreground">
                <h1>{t('title', {defaultValue: 'Rinoplastika: Riktheni Konturin dhe Përmirësoni Frymëmarrjen'})}</h1>
                
                {service.image && (
                    <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden shadow-lg border">
                        <Image
                            src={decodeURIComponent(service.image)}
                            alt={serviceName}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 67vw, 850px"
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={service.imageHint || 'rhinoplasty procedure'}
                        />
                    </div>
                )}
                
                <p><strong>Rinoplastika</strong>, e njohur ndryshe si operacioni i hundës, është një nga procedurat më të kërkuara të kirurgjisë estetike që synon të përmirësojë harmoninë e fytyrës duke ndryshuar formën, madhësinë ose proporcionet e hundës. Përveç anës estetike, rinoplastika mund të korrigjojë edhe probleme funksionale, si vështirësitë në frymëmarrje të shkaktuara nga devijimi i septumit.</p>
                <p>Një hundë e çekuilibruar mund të ndikojë ndjeshëm në pamjen e përgjithshme të fytyrës dhe vetëbesimin. Rinoplastika adreson këto shqetësime duke modifikuar strukturën kockore dhe kërcore të hundës. Qëllimi është të krijohet një hundë me pamje natyrale që është në harmoni të plotë me tiparet e tjera të fytyrës.</p>
                
                <ul>
                    <li><strong>Përmirësimi i formës së hundës:</strong> Korrigjimi i gungave, zgjerimi ose ngushtimi i urës së hundës.</li>
                    <li><strong>Modifikimi i majës së hundës:</strong> Përmirësimi i një maje të madhe, të rënë ose të kthyer lart.</li>
                    <li><strong>Korrigjimi i vrimave të hundës:</strong> Rregullimi i madhësisë ose formës së vrimave të hundës.</li>
                    <li><strong>Korrigjimi i asimetrisë:</strong> Arritja e një pamjeje më simetrike.</li>
                    <li><strong>Zgjidhja e problemeve funksionale:</strong> Korrigjimi i devijimit të septumit për të përmirësuar frymëmarrjen.</li>
                    <li><strong>Rritja e vetëbesimit:</strong> Arritja e pamjes së dëshiruar dhe harmonike.</li>
                </ul>
                <p>Kjo procedurë ndihmon në arritjen e një ekuilibri më të mirë estetik dhe funksional, duke përmirësuar cilësinë e jetës.</p>

                <hr className="my-8" />

                <h2>Metodat e Rinoplastikës: Teknika e Hapur dhe e Mbyllur</h2>
                <p>Ekzistojnë dy teknika kryesore për rinoplastikën, dhe zgjedhja midis tyre varet nga kompleksiteti i ndërhyrjes dhe objektivat specifike të pacientit.</p>

                <h4>1. Rinoplastika e Hapur:</h4>
                <ul>
                    <li><strong>Përshkrimi:</strong> Kjo teknikë përfshin një prerje të vogël nëpër kolumelë (indi midis vrimave të hundës), duke lejuar kirurgun të ngrejë lëkurën dhe të ketë një pamje të plotë dhe të drejtpërdrejtë të strukturës së brendshme të hundës (kockës dhe kërceve).</li>
                    <li><strong>Avantazhet:</strong>
                        <ul>
                            <li>Ofron saktësi maksimale dhe kontroll për modifikime komplekse.</li>
                            <li>Ideale për raste të vështira, si rinoplastika revizionuese ose deformime të theksuara.</li>
                            <li>Lejon vendosjen e saktë të grafteve kërcore.</li>
                        </ul>
                    </li>
                    <li><strong>Indikacionet:</strong> Përdoret për ndryshime të mëdha strukturore, korrigjimin e majës së hundës dhe raste revizionuese.</li>
                </ul>

                <h4>2. Rinoplastika e Mbyllur:</h4>
                <ul>
                    <li><strong>Përshkrimi:</strong> Të gjitha prerjet bëhen brenda vrimave të hundës, pa asnjë shenjë të jashtme. Kirurgu punon përmes këtyre prerjeve për të rimodeluar kockën dhe kërcet.</li>
                    <li><strong>Avantazhet:</strong>
                        <ul>
                            <li>Nuk ka shenja të dukshme të jashtme.</li>
                            <li>Zakonisht ka më pak ënjtje dhe një kohë më të shkurtër rikuperimi.</li>
                        </ul>
                    </li>
                    <li><strong>Indikacionet:</strong> E përshtatshme për pacientë që kërkojnë modifikime më të vogla, si heqja e një gunge të vogël ose rafinimi i urës së hundës.</li>
                </ul>
                <p>Zgjedhja e teknikës më të mirë do të bëhet në konsultim të detajuar me kirurgun tuaj specialist për të siguruar arritjen e rezultatit më të mirë të mundshëm.</p>
                
                <hr className="my-8" />

                <h2>Procesi i Trajtimit të Rinoplastikës</h2>
                <p>Procesi i rinoplastikës ndjek hapa specifikë për të siguruar rezultate të sigurta dhe efektive.</p>

                <h4>1. Konsulta fillestare dhe planifikimi:</h4>
                <ul>
                    <li><strong>Vlerësim i detajuar:</strong> Mjeku do të vlerësojë me kujdes strukturën e hundës dhe fytyrës suaj. Simulimet kompjuterike mund të përdoren për të vizualizuar rezultatet e mundshme dhe për të planifikuar saktë procedurën.</li>
                    <li><strong>Diskutim i objektivave:</strong> Do të diskutoni objektivat tuaja estetike dhe funksionale për të krijuar një plan të personalizuar.</li>
                </ul>

                <h4>2. Përgatitja për procedurën:</h4>
                <ul>
                    <li><strong>Anestezia:</strong> Rinoplastika zakonisht kryhet nën <strong>anestezi të përgjithshme</strong>, duke siguruar që jeni plotësisht në gjumë dhe pa dhimbje gjatë gjithë operacionit.</li>
                    <li><strong>Udhëzime para-operatore:</strong> Do t'ju jepen udhëzime specifike për t'u ndjekur para operacionit, duke përfshirë ndalimin e disa medikamenteve.</li>
                </ul>

                <h4>3. Procedura:</h4>
                <p>Kirurgu do të kryejë prerjet sipas teknikës së zgjedhur (të hapur ose të mbyllur). Më pas, do të rimodelojë kockën dhe kërcet për të arritur formën e dëshiruar. Nëse është e nevojshme, do të korrigjohet edhe devijimi i septumit. Pasi të përfundojë rimodelimi, lëkura vendoset përsëri dhe prerjet qepen. Kohëzgjatja e procedurës zakonisht varion nga 1.5 deri në 3 orë.</p>
                
                <h4>4. Pas procedurës:</h4>
                <p>Pas operacionit, do të vendoset një allçi ose një mbajtëse termoplastike mbi hundë për të mbrojtur dhe mbështetur strukturat e reja. Mund të vendosen edhe tamponë brenda hundës për të stabilizuar septumin. Do të merrni udhëzime të detajuara për kujdesin pas operacionit.</p>

                <hr className="my-8" />
                
                <h2>Faza e Shërimit dhe Rezultatet</h2>
                <h4>Shërimi i menjëhershëm (1-2 javë):</h4>
                <ul>
                    <li><strong>Ënjtje, nxirje dhe parehati:</strong> Këto janë normale pas operacionit. Ënjtja dhe mavijosjet rreth syve dhe hundës arrijnë kulmin në 2-3 ditët e para.</li>
                    <li><strong>Heqja e allçisë dhe tamponëve:</strong> Allçia dhe çdo qepje e jashtme zakonisht hiqen pas rreth një jave.</li>
                    <li><strong>Kthimi në aktivitete:</strong> Shumica e pacientëve kthehen në punë ose në shkollë brenda 7-10 ditësh, por aktivitetet e rënda duhet të shmangen për 4-6 javë.</li>
                </ul>

                <h4>Rezultatet afatgjata:</h4>
                <ul>
                    <li><strong>Rezultatet fillestare:</strong> Ndryshimet do të jenë të dukshme menjëherë pas heqjes së allçisë, por hunda do të jetë ende e ënjtur.</li>
                    <li><strong>Rezultati përfundimtar:</strong> Mund të duhen deri në një vit që ënjtja të zhduket plotësisht dhe forma përfundimtare e hundës të shfaqet. Rezultatet e rinoplastikës janë të përhershme.</li>
                </ul>

                <h5>Përfitimet e rinoplastikës:</h5>
                <ul>
                    <li><strong>Përmirësimi i harmonisë së fytyrës:</strong> Krijon një pamje më të balancuar dhe estetike.</li>
                    <li><strong>Përmirësimi i frymëmarrjes:</strong> Zgjidh problemet funksionale të shkaktuara nga defektet strukturore.</li>
                    <li><strong>Rritja e vetëbesimit:</strong> Përmirëson ndjeshëm imazhin personal dhe vetëvlerësimin.</li>
                </ul>

            </article>
        </div>
    );
}
