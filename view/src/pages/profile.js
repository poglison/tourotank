import Header from '../components/header';
import Footer from '../components/footer';
import Breadcrumbs from '../templates/breadcrumbs';
import Settings from '../components/settings';
import Skeleton from '../templates/skeleton';

import { useState, useContext, useEffect } from 'react';
import { getByID } from '../utils/services';
import { optionsProfile } from '../utils/jsons';

import { useNavigate, useParams } from 'react-router-dom';
import Container from '../templates/container';

export default function Profile() {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectOption, setSelectOption] = useState("Resumo");
    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        getByID('user', id).then((response) => {
            setLoading(false);
            if (response.status == 404) {
                navigate('/404');
            } else {

                response.created = formatDate(response.created);

                setUser(response);
            }
        })
    }, []);

    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString();
    }


    return (
        <div className='bg-white dark:bg-stone-850 overflow-x-hidden relative'>

            <Header className="!bg-transparent relative" />

            <div className='w-full pt-20 absolute top-0 h-64 bg-stone-50 dark:bg-stone-900 border-b border-stone-300 dark:border-stone-700'>
                <div className='px-5 md:px-10 mt-10 flex items-center'>

                    <div className='flex items-center'>
                        <div className='w-24 h-24 rounded-full mr-5'>
                            {(!loading && user?.image) ?
                                (<img src={user?.image} className='w-full h-full object-cover rounded-full' alt='Imagem do usuario' />)
                                :
                                (
                                    <Skeleton loading={loading} rounded={"rounded-full"} className='w-24 h-24 object-cover rounded-full'>
                                        <div>

                                        </div>
                                    </Skeleton>
                                )}
                        </div>

                        <div>
                            <div className='flex items-center'>
                                <Skeleton loading={loading} className='font-ibm text-xl font-medium text-stone-600 min-h-7 min-w-60'>
                                    <div className='font-ibm text-xl font-medium text-stone-600 dark:text-stone-300 min-h-7 min-w-10'>
                                        {user?.displayName}
                                    </div>
                                </Skeleton>


                                {user?.beta > 0 && (
                                    <svg className='ml-4 fill-primary hover:fill-stone-700' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <g clip-path="url(#clip0_57_4)">
                                            <rect width="25" height="25" rx="5" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7143 7.60713V10.0253C15.7143 10.665 15.9682 11.2789 16.4203 11.73L19.3485 14.6582C19.7664 15.076 20 15.6417 20 16.2321C20.0031 16.7512 19.8213 17.2545 19.4872 17.6519C19.153 18.0492 18.6884 18.3146 18.1764 18.4007C16.3282 18.7006 14.4318 18.8571 12.5 18.8571C10.5682 18.8571 8.67181 18.7006 6.8236 18.4007C6.31162 18.3146 5.84698 18.0492 5.51285 17.6519C5.17872 17.2545 4.99694 16.7512 5.00004 16.2321C5.00004 15.6417 5.23468 15.075 5.65146 14.6571L8.57966 11.73C9.03149 11.2781 9.28545 10.6654 9.28573 10.0264V7.60713H9.01788C8.80476 7.60713 8.60037 7.52247 8.44967 7.37178C8.29897 7.22108 8.21431 7.01669 8.21431 6.80357C8.21431 6.59045 8.29897 6.38606 8.44967 6.23536C8.60037 6.08466 8.80476 6 9.01788 6H15.9821C16.1952 6 16.3996 6.08466 16.5503 6.23536C16.701 6.38606 16.7857 6.59045 16.7857 6.80357C16.7857 7.01669 16.701 7.22108 16.5503 7.37178C16.3996 7.52247 16.1952 7.60713 15.9821 7.60713H15.7143ZM10.8929 10.0253V7.60713H14.1071V10.0253C14.107 10.553 14.2109 11.0755 14.4127 11.5631C14.6146 12.0506 14.9105 12.4936 15.2836 12.8668L15.4528 13.036C15.4259 13.0478 15.3991 13.06 15.3725 13.0725C14.9182 13.2867 14.3911 13.2803 13.9421 13.0553L12.6671 12.4178C11.9773 12.0728 11.2203 11.8827 10.4493 11.8607C10.7408 11.2928 10.8929 10.6637 10.8929 10.0253Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_57_4">
                                                <rect width="25" height="25" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}

                                {user?.admin && (
                                    <svg className='ml-2 fill-primary hover:fill-stone-700' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <g clip-path="url(#clip0_57_11)">
                                            <rect width="25" height="25" rx="5" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.48124 9.65937C9.61291 9.79121 9.68687 9.96992 9.68687 10.1562C9.68687 10.3426 9.61291 10.5213 9.48124 10.6531L7.63437 12.5L9.48124 14.3469C9.55032 14.4112 9.60573 14.4889 9.64416 14.5751C9.68259 14.6614 9.70326 14.7545 9.70492 14.8489C9.70659 14.9433 9.68922 15.0371 9.65386 15.1246C9.61849 15.2122 9.56586 15.2917 9.49909 15.3585C9.43232 15.4252 9.35279 15.4779 9.26524 15.5132C9.17769 15.5486 9.08391 15.566 8.9895 15.5643C8.89509 15.5626 8.80199 15.542 8.71574 15.5035C8.62949 15.4651 8.55186 15.4097 8.48749 15.3406L6.14374 12.9969C6.01207 12.865 5.93811 12.6863 5.93811 12.5C5.93811 12.3137 6.01207 12.135 6.14374 12.0031L8.48749 9.65937C8.61933 9.5277 8.79804 9.45374 8.98437 9.45374C9.1707 9.45374 9.34941 9.5277 9.48124 9.65937ZM15.5187 9.65937C15.3871 9.79121 15.3131 9.96992 15.3131 10.1562C15.3131 10.3426 15.3871 10.5213 15.5187 10.6531L17.3656 12.5L15.5187 14.3469C15.4497 14.4112 15.3943 14.4889 15.3558 14.5751C15.3174 14.6614 15.2967 14.7545 15.2951 14.8489C15.2934 14.9433 15.3108 15.0371 15.3461 15.1246C15.3815 15.2122 15.4341 15.2917 15.5009 15.3585C15.5677 15.4252 15.6472 15.4779 15.7347 15.5132C15.8223 15.5486 15.9161 15.566 16.0105 15.5643C16.1049 15.5626 16.198 15.542 16.2842 15.5035C16.3705 15.4651 16.4481 15.4097 16.5125 15.3406L18.8562 12.9969C18.9879 12.865 19.0619 12.6863 19.0619 12.5C19.0619 12.3137 18.9879 12.135 18.8562 12.0031L16.5125 9.65937C16.3807 9.5277 16.2019 9.45374 16.0156 9.45374C15.8293 9.45374 15.6506 9.5277 15.5187 9.65937ZM13.3025 6.8825C13.4869 6.90896 13.6533 7.00755 13.7651 7.15662C13.8769 7.30568 13.925 7.49302 13.8987 7.6775L12.4925 17.5212C12.4604 17.7006 12.3599 17.8604 12.2123 17.9672C12.0646 18.0739 11.8813 18.1191 11.7009 18.0934C11.5206 18.0676 11.3573 17.9728 11.2454 17.829C11.1335 17.6853 11.0819 17.5036 11.1012 17.3225L12.5075 7.47875C12.534 7.29431 12.6325 7.12791 12.7816 7.01612C12.9307 6.90432 13.118 6.85626 13.3025 6.8825Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_57_11">
                                                <rect width="25" height="25" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}

                                {(loading == false) && (
                                    <img className="h-7 rounded-full ml-3" src={"/imgs/levels/" + (user.level ? user.level : "na") + ".webp"} alt="Level" />
                                )}


                            </div>


                            <div className='flex items-center mt-2 h-6 dark:text-stone-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-5 h-5 text-stone-700 dark:text-stone-300">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>

                                <Skeleton loading={loading} className='w-40 h-5 object-cover rounded-full'>
                                    <span className='h-6 text-sm'>Brasil</span>
                                </Skeleton>
                            </div>

                            <div className='flex items-center mt-2 h-6 dark:text-stone-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-700 dark:text-stone-300 mr-2">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>

                                <Skeleton loading={loading} className='w-40 h-5 object-cover rounded-full'>
                                    <span className='h-6 text-sm'>Membro desde  {user?.created}</span>
                                </Skeleton>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <Container className='mt-10 pt-0 dark:bg-stone-850'>

                <div className='mt-56 md:mt-32 flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:flex-col md:!w-60 border border-stone-300 dark:border-stone-700  rounded-lg'>

                        <span className='block px-4 pt-4 pb-4 mb-0 font-medium text-stone-700 dark:text-stone-300 border-b border-stone-300 dark:border-b-stone-800'>Menu</span>

                        <div>
                            {
                                optionsProfile?.map((item, index) => {
                                    if (optionsProfile.length - 1 == index) {
                                        return (
                                            <div onClick={() => { setSelectOption(item.title); if (item.title == "Sair") { setUser({}); sessionStorage.clear(); navigate("/login") } }} key={index} className='w-full h-12 p-2 px-4 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-b-lg flex items-center cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                                    <path fillRule="evenodd" d={item.icon} />
                                                </svg>


                                                <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{item.title}</span>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div onClick={() => {setSelectOption(item.title); if (item.title == "Sair") { setUser({}); sessionStorage.clear(); navigate("/login") } }} key={index} className='w-full h-12 p-2 px-4 border-b border-stone-300 dark:border-stone-700 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 flex items-center cursor-pointer'>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-stone-600 dark:text-stone-400">
                                                    <path fillRule="evenodd" d={item.icon} />
                                                </svg>

                                                <span className="text-sm ml-3 text-stone-600 dark:text-stone-400">{item.title}</span>
                                            </div>
                                        )

                                    }
                                })
                            }
                        </div>

                    </div>

                    <Settings user={user} option={selectOption} />

                </div>
            </Container>


            <Footer />
        </div>
    )
}