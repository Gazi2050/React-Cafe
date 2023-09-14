import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold text-sky-500'>React <span className='text-amber-500'>Cafe</span></h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;