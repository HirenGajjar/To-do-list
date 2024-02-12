"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        setmainTask([...mainTask, {
            title,
            desc
        }]);

        settitle("");
        setdesc("");
        console.log(mainTask);
    }

    const deleteHandler = (index) => {
        let copyTask = [...mainTask];
        copyTask.splice(index, 1);
        setmainTask(copyTask);
    }
    let renderTask = < h2 > Yeeeee,
        All tasks are done! < /h2>;

    if (mainTask.length > 0) {
        renderTask = mainTask.map(
            (task, index) => {
                return <li key = { index }
                className = 'flex items-center justify-between mb-5' >
                    <
                    div className = 'flex justify-between w-2/3' >
                    <
                    h5 className = 'font-bold text-2xl' > { task.title } <
                    /h5> <
                h6 > { task.desc } <
                    /h6> < /
                div >
                    <
                    button
                onClick = {
                    () => { deleteHandler(index) }
                }
                className = 'bg-red-400 text-white px-4 py-2 rounded font-bold' >
                    Delete <
                    /button> < /
                li > ;
            }
        );
    }


    return ( <
        >
        <
        h1 className = 'bg-black text-white text-5xl font-bold text-center uppercase p-5' > To do </h1>  <
        form onSubmit = { submitHandler } >
        <
        input type = 'text'
        placeholder = 'Enter Task'
        value = { title }
        onChange = {
            (e) => {

                settitle(e.target.value);
            }
        }
        className = 'border-2 border-zinc-800 m-5 px-4 py-2' / >
        <
        input type = 'text'
        placeholder = 'Enter Description'
        value = { desc }
        onChange = {
            (e) => {

                setdesc(e.target.value);
            }
        }
        className = 'border-2 border-zinc-800 m-5 px-4 py-2' / >
        <
        button className = 'border-2 bg-black text-white px-6 py-2 font-bold rounded m-5' > Add task < /button> < /
        form >
        <
        hr className = 'm-5 border-2' / >
        <
        div className = 'p-8 ' >
        <
        ul > { renderTask } <
        /ul> < /
        div > < / >
    );
}

export default page