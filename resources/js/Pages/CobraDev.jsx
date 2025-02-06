import { Head, Link } from '@inertiajs/react';

export default function CobraDev() {
    return (
        <>
            <Head title="CobraDev"/>
            <div className="py-12 text-center bg-white sm:rounded-lg">
                <img 
                    src="/assets/logo.svg"
                    alt="Logo" 
                    className="mx-auto mb-4 w-32"
                />
                <h1 className="text-4xl font-bold text-gray-900">CobraDev</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt esse harum repudiandae optio cupiditate aperiam aliquid tempora ex nulla mollitia, iste eaque velit fugiat quam delectus. In ratione quasi accusamus!</p>
            </div>
        </>
    );
}