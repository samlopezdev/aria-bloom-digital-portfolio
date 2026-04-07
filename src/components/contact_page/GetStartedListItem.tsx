interface GetStartedProps {
    number: string,
    description: string
}

export const GetStartedListItem = ({ number, description }: GetStartedProps) => {
    return (
        <li className="flex gap-2">
            <span className="text-primary font-bold text-lg">{number}</span>
            <p className="text-slate-600 dark:text-slate-400 md:text-lg">{description}</p>
          </li>
    )
}