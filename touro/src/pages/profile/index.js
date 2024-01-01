import Header from '../../components/header';
import Footer from '../../components/footer';
import Breadcrumbs from '../../templates/breadcrumbs';

export default function Profile() {

    var infos = [
        {
            title: 'Nome',
            value: 'touratank'
        },
        {
            title: 'E-mail',
            value: 'touratank@gmail.com',
        },
        {
            title: 'Criado em',
            value: '01/01/2021 às 12:00',
        },
        {
            title: 'Último acesso',
            value: '01/01/2024 às 12:00',
        }
    ]

    var items = ["Resumo", "Investimentos", "Favoritos", "Configurações", "Verificações", "Segurança", "Sair"]


    return (
        <div>
            <Header className="!pr-10" />

            <div className='p-10 pt-0'>
                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Perfil', path: '/profile' }]} />

                <div className='text-2xl font-medium mt-5 mb-5'>
                    Perfil
                </div>

                <div className='pt-20 absolute left-0 top-0 w-full h-64 bg-zinc-50 rounded border-b'>
                    <div className='p-10 flex items-center'>

                        <div className='w-20 h-20 rounded-full mr-5'>
                            <img src='https://avatars.githubusercontent.com/u/7' className='w-full h-full object-cover rounded-full' />
                        </div>

                        <div>
                            <div className='font-ibm text-xl font-medium text-zinc-600'>
                                touratank
                            </div>

                            <div className='w-24 h-7 border-2 font-medium border-zinc-600 rounded-full text-xs flex items-center justify-center cursor-pointer hover:bg-zinc-600 text-zinc-600 hover:text-white'>
                                Editar perfil
                            </div>

                        </div>


                        <div className='flex'>



                        </div>
                    </div>

                </div>

                <div className='mt-32'>
                    <div className='w-60 border border-zinc-300 rounded-lg'>

                        <span className='block px-4 pt-4 pb-4 mb-0 font-medium text-zinc-700 border-b border-b-zinc-300'>Menu</span>

                        <div>
                            {
                                items.map((item, index) => {
                                    if(items.length - 1 == index){
                                    return (
                                        <div key={index} className='w-full h-12 p-2 hover:bg-zinc-50 rounded-b-lg flex items-center cursor-pointer'>
                                            <span className="text-sm ml-3 text-zinc-600">{item}</span>
                                        </div>
                                    )
                                    } else{
                                        return (
                                            <div key={index} className='w-full h-12 p-2 border-b border-zinc-300 hover:bg-zinc-50 flex items-center cursor-pointer'>
                                                <span className="text-sm ml-3 text-zinc-600">{item}</span>
                                            </div>
                                        )
                                    
                                    }
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}