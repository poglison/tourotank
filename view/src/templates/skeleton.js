

export default function Skeleton(props) {

    return (
        <div>
            {props.loading ?
                <div class={"w-full h-full overflow-hidden relative space-y-5 rounded-2xl bg-stone-50 bg-gradient-to-r from-transparent via-stone-100 to-transparent  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-stone-50 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent " + (props.rounded ? props.rounded : "")}>

                    <div className={props.className}></div>

                </div>
                :
                props.children
            }
        </div>
    )
}