"use client";

import { getStrapiMedia } from "@/lib/utils";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function SectionSelection({section}){
    return(
        <>
            {section?.files && <Files section={section} />}
            {section?.table && <Table section={section} />}
            {section?.details && <Address section={section} />}
        </>
    )

}

export function Files({section}){
    return (
        <>
            {section?.title &&
                <div className="section-title-wrapper">
                <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">{section.title}</h2>
                </div>
            }
            {section.files && section.files.map((files) => (
                <div className="flex flex-col gap-6" key={files.id}>
                    {files.collection.length > 0 && files?.description &&
                        <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">{files.description}</h3>
                    }
                    {files.collection.length > 0 &&
                        <div className="grid grid-cols-2 gap-6">
                            {files.collection.map((collection) => ( collection.file?.url &&
                                <Link href={getStrapiMedia(collection.file.url)} className="flex gap-3 items-center w-fit" key={collection.id}>
                                        <div className="p-2 bg-[#E0E1F5] rounded-xl">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.25 15.75H17.625V20.25M19.875 18.375H17.625M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25M4.5 12V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25M14.25 3L19.5 8.25M14.25 3V8.25H19.5M19.5 8.25V12M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z" stroke="#2E3192" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        {collection?.name && 
                                            <p>{collection.name}</p>
                                        }
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            ))}
        </>
    );
}


export function Table({section}){
    return (
        <>
            {section?.title &&
                <div className="section-title-wrapper">
                <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">{section.title}</h2>
                </div>
            }
            {section.table && section.table.map((tables) => (
                <div className="flex flex-col gap-6" key={tables.id}>
                    {tables.row.length > 0 && tables?.description &&
                        <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">{tables.description}</h3>
                    }
                    {tables.row.length > 0 &&
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right">
                            <thead class="font-semibold text-[16px] leading-[20px] text-secondary bg-[#E0E1F5]">
                                <tr>
                                    <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                        Sr. No.
                                    </th>
                                    <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                        Color
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tables.row.map((rows, index) => (
                                    <tr class="font-medium text-[14px] leading-[17px] text-[#3D434C]" key={rows.id}>
                                        <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{index+1}</th>
                                        {rows?.name && <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{rows.name}</th>}
                                        {rows?.status && <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{rows.status}</th>}
                                    </tr>                               
                                ))}
                            </tbody>
                        </table>
                    </div>
                    }
                </div>
            ))}
        </>
    );
}


export function Address({section}){
    return (
        <>
            {section?.title &&
                <div className="section-title-wrapper">
                <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">{section.title}</h2>
                </div>
            }
            {section?.details && 
                <div className="flex flex-col gap-6">
                    {section.details.map((details) => (
                        <div className="flex flex-col gap-3" key={details.id}>
                            {details.content.length > 0 && details?.description &&
                                <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">{details.description}</h3>
                            }
                            {details.content.length > 0 &&  
                                <BlocksRenderer content={details.content}
                                    blocks={{
                                        paragraph: ({ children }) => <p className="text-[#4F5662]">{children}</p>,
                                        heading: ({ children, level }) => {
                                            switch (level) {
                                                case 1:
                                                    return <h1>{children}</h1>
                                                case 2:
                                                    return <h2>{children}</h2>
                                                case 3:
                                                    return <h3>{children}</h3>
                                                case 4:
                                                    return <h4>{children}</h4>
                                                case 5:
                                                    return <h5>{children}</h5>
                                                case 6:
                                                    return <h6>{children}</h6>
                                                default:
                                                    return <h1>{children}</h1>
                                            }
                                        },
                                        link: ({ children, url }) => <Link href={url}>{children}</Link>,
                                    }}
                                    modifiers={{
                                        bold: ({ children }) => <strong>{children}</strong>,
                                        italic: ({ children }) => <span className="italic">{children}</span>,
                                    }}
                                />
                            }
                        </div>
                    ))}
                </div>
            }
        </>
    );
}