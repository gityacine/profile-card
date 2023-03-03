export default function Card() {
    return (
        <div className="relative flex flex-col items-center bg-white rounded-xl overflow-hidden">
            <img src="assets/bg-pattern-card.svg" alt="background" />
            <img className="w-24 rounded-full -mt-12 outline outline-[5px] outline-white" src="image-victor.jpg" alt="avatar" />
            <div className="mt-10">
                <span>Victor Crest</span>
            </div>

        </div>
    );
}