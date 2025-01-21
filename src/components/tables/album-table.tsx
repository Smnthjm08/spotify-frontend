import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { formatDuration } from "@/lib/helpers";
import { Album } from "@/types/types";
import { Clock3 } from "lucide-react";

export default function AlbumTable({album}: {album: Album}) {
    return (
        <div className="bg-black/20 backdrop-blur-sm">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">#</TableHead>
              <TableHead className="w-[140px]">{" "}</TableHead>
              <TableHead className="w-[400px]">Title</TableHead>
              <TableHead className="w-[200px]">Artist</TableHead>
              {/* <TableHead className="w-[200px]">Rele</TableHead> */}
              <TableHead className="items-end w-8">
                <Clock3 className="h-4 w-4 hover:marker" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {album?.songs.map((song, index) => (
              <TableRow key={song._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                    <img src={song.imageUrl} alt="cover" className="size-10" />
                </TableCell>
                <TableCell>{song.title}</TableCell>
                <TableCell>{song.artist}</TableCell>
                {/* <TableCell>{song.createdAt ? song.createdAt.toLocaleDateString() : 'N/A'}</TableCell> */}
                <TableCell>{formatDuration(song.duration)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
}