import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { chooseMake, chooseModel, chooseYear} from "../../redux/slices/rootSlice";
import { Input } from '../sharedComponents';
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";

interface CarFormProps{
    id?:string;
    data?:{}
}

interface CarState{
    make:string;
    model:string;
    year:string;
}

export const CarForm = (props:CarFormProps) =>{
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    const make= useSelector<CarState>(state => state.make);
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data:any, event:any) =>{
        console.log(props.id)

        if(props.id!){
            await serverCalls.update(props.id!,data)
            console.log(`Updated drone id: ${props.id}`)
            window.location.reload();
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            await serverCalls.create(store.getState())
            window.location.reload();
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <input {...register('make')} name="make" placeholder='Ferarri'></input>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input {...register('model')} name="model" placeholder='SF90 Stradale'></input>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input {...register('year')} name="year" placeholder='2022'></input>
                </div>
                <div>
                    <label htmlFor="top_speed">Top Speed</label>
                    <input {...register('top_speed')} name="top_speed" placeholder='220mph'></input>
                </div>
                <div>
                    <label htmlFor="max_horsepower">Max Horsepower</label>
                    <input {...register('max_horsepower')} name="max_horsepower" placeholder='175'></input>
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <input {...register('seats')} name="seats" placeholder='2'></input>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input {...register('price')} name="price" placeholder='500000'></input>
                </div>
                <div>
                    <label htmlFor="length">Length</label>
                    <input {...register('length')} name="length" placeholder='2.6 meters'></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input {...register('country')} name="country" placeholder='Italy'></input>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}