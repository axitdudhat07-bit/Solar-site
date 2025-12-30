import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const enquiries = [
  { id: 1, name: "John Smith", email: "john@gmail.com", type: "Residential", date: "2024-03-10", status: "New", message: "Interested in a 5kW system for my 3-bedroom house." },
  { id: 2, name: "Sarah Connor", email: "sarah@tech.co", type: "Commercial", date: "2024-03-09", status: "In Progress", message: "Need a quote for our warehouse roof (approx 5000 sq ft)." },
  { id: 3, name: "Mike Ross", email: "mike.ross@law.com", type: "Maintenance", date: "2024-03-08", status: "Completed", message: "My inverter is showing an error code 004." },
  { id: 4, name: "Jessica Pearson", email: "jessica@pearson.com", type: "Commercial", date: "2024-03-08", status: "New", message: "Looking to install solar panels for our new office building." },
];

export default function AdminEnquiries() {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Enquiries</h2>

        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry) => (
                <TableRow key={enquiry.id}>
                  <TableCell>{enquiry.date}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{enquiry.name}</span>
                      <span className="text-xs text-muted-foreground">{enquiry.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{enquiry.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                      enquiry.status === "New" ? "default" : 
                      enquiry.status === "In Progress" ? "secondary" : "outline"
                    }>
                      {enquiry.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Eye className="mr-2 h-4 w-4" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Enquiry Details</DialogTitle>
                          <DialogDescription>
                            From {enquiry.name} on {enquiry.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm font-medium text-muted-foreground">Email</div>
                              <div>{enquiry.email}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-muted-foreground">Type</div>
                              <div>{enquiry.type}</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground">Message</div>
                            <div className="mt-1 p-3 bg-slate-50 rounded-md text-sm border">
                              {enquiry.message}
                            </div>
                          </div>
                          <div className="flex justify-end gap-2 pt-4">
                            <Button variant="outline">Mark as Read</Button>
                            <Button>Reply via Email</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
