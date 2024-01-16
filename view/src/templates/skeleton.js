

export default function Skeleton(props) {

    return (
        <div>
            {props.loading ?
                <div class="w-full h-full overflow-hidden relative space-y-5 rounded-2xl bg-gray-100 bg-gradient-to-r from-transparent via-gray-100 to-transparent  before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-50 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent">

                    <div className={props.className}></div>

                </div>
                :
                props.children
            }
        </div>
    )
}