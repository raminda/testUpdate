package com.millenniumit.mx.Portal;
/**
 * @author Raminda
 *
 */
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Locale;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableModel;

import jxl.JXLException;
import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.format.Colour;
import jxl.format.UnderlineStyle;
import jxl.read.biff.BiffException;
import jxl.write.Formula;
import jxl.write.Label;
import jxl.write.Number;
import jxl.write.NumberFormat;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableFont.FontName;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;

import org.apache.log4j.Logger;

import com.liferay.portal.kernel.servlet.HttpHeaders;
import com.millenniumit.mx.data.nethdsizing.domain.EquipmentBulk;
import com.millenniumit.mx.data.nethdsizing.domain.Packages;
import com.millenniumit.mx.data.nethdsizing.domain.Project;
import com.millenniumit.mx.data.nethdsizing.domain.ProjectItems;
import com.millenniumit.mx.data.nethdsizing.service.CompanyService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsBulkService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsService;
import com.millenniumit.mx.data.nethdsizing.service.ItemTypesService;
import com.millenniumit.mx.data.nethdsizing.service.PackagesService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectItemsService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectsService;
import com.millenniumit.mx.data.nethdsizing.service.VersionMapService;

@SuppressWarnings("unused")
public class  ExcelCreator {
	
	
	
	private String dateFormat  = "yyyy-MM-dd";
	private Logger logger = Logger.getLogger(ExcelCreator.class);
	
	//Services Objects in Service class 
	
	private EquipmentsService equipmentService;
	private CompanyService companyService;
	private ItemTypesService itemTypeService;
	private PackagesService packageService;
	private ProjectsService projectService;
	private EquipmentsBulkService equipmentsBulkService;
	private ProjectItemsService projectItemsService;
	private VersionMapService versionMapService;
	
	private String FilepathString,Coverpathstring;
	private String obj[]=new String[3];
	private WritableWorkbook workbook = null;
	private Workbook Cover=null;
	private int number;
	
	public ExcelCreator(EquipmentsService equipmentService,EquipmentsBulkService equipmentsBulkService,ItemTypesService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService,CompanyService companyService,VersionMapService versionMapService){	
		
		this.equipmentService =equipmentService; 
		this.equipmentsBulkService=equipmentsBulkService;
		this.itemTypeService = itemTypeService;
		this.packageService =packageService ;
		this.projectService =projectService;
		this.projectItemsService = projectItemsService;
		this.companyService=companyService;
		this.versionMapService=versionMapService;
		
		FilepathString="C:/project/liferay-portal/tomcat-7.0.27/webapps/Excel";
		FilepathString=FilepathString.replaceAll("\\s", "");
		Coverpathstring="C:/project/liferay-portal/tomcat-7.0.27/webapps/test-portlet/netHD/Excel/";
		Coverpathstring=Coverpathstring.replaceAll("\\s", "");
	}
	
	
	public  void myxcel(ResourceRequest request, ResourceResponse response,String projectID,String Option,String Version) throws IOException, WriteException, BiffException {
		response.addProperty(HttpHeaders.CACHE_CONTROL, "max-age=3600, must-revalidate");
		response.addProperty(HttpHeaders.CONTENT_TYPE, " application/vnd.ms-excel");
		response.addProperty(HttpHeaders.PRAGMA," no-cache");
		response.addProperty(HttpHeaders.CACHE_CONTROL, "post-check=0, pre-check=0,false");
		response.addProperty(HttpHeaders.CACHE_CONTROL, "no-store, no-cache, must-revalidate");
		
		PrintWriter out = response.getWriter();
		
		//obj[0]=projectID;
		obj[1]=Option;
		obj[0]=Version;
		Project projects= projectService.getProjects(projectID);
		//List<String> Projectitems=projectItemsService.getAllString(projects, obj, 1);
		//String[] Projectitems={"",""};
		
		//Report Store Directory
		String FilePath=projects.getCompany().getCompanyName()+"/"+projectID+"/"+Option+"/"+Version;
		FilePath=FilePath.replaceAll("\\s","");
		//Report file name like  BMB_option_1_(250us)_Hardware_specification_v2.1
		String fileName = projects.getCompany().getCompanyName()+ "_"+ projectID +"_"+Option+"_"+Version+".xls";
		fileName=fileName.replaceAll("\\s","");
		
		
		
		String Drctry=Coverpathstring+"/"+FilePath;
		//create Project Excel Directory
		logger.info(new File(Drctry).mkdirs());
		System.out.println("Drctry : "+Drctry);
		System.out.println("Coverpathstring : "+Coverpathstring);
		WorkbookSettings ws = new WorkbookSettings();
		ws.setLocale(new Locale("en", "EN"));
		
		//get cover Excel
		 Cover= Workbook.getWorkbook(new File(Coverpathstring+"Cover.xls"));
		
		//Report file name with Directory
		 File file= new File(Drctry+"/"+fileName);
		 workbook = Workbook.createWorkbook(file,Cover,ws);
		 response.addProperty(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+fileName);
		//Hw-Sw spec
		try {
			HW_specCreator(obj,projects);
		} catch (JXLException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		WritableSheet s=workbook.getSheet(0);
		FontName ft=WritableFont.ARIAL;
		WritableFont wf = new WritableFont(ft,14,WritableFont.BOLD,true,UnderlineStyle.NO_UNDERLINE);
		WritableCellFormat cf = new WritableCellFormat(wf);	
		cf.setAlignment(jxl.format.Alignment.CENTRE);
		Label l=new Label(5, 7, projectID, cf);
		s.addCell(l);
          
		workbook.write();
		workbook.close();
		String address=request.getContextPath()+" - "+request.getServerName()+ " - "+request.getServerPort()+" - /*/**"+request.toString();
		logger.info(address);
		System.out.println("[{FileName: 'https://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/netHD/Excel/"+FilePath+"/"+fileName+"'}]");
		
		out.println("[{'FileName': 'ftp://user:1234@"+request.getServerName()+":21"+request.getContextPath()+"/netHD/Excel/"+FilePath+"/"+fileName+"'}]");
		
	}
	
	
	private void HW_specCreator(String Obj[],Project projects)throws JXLException, Exception {
		
		List<String> Sites=versionMapService.getSite(projects, obj[1],obj[0]);
		number= Sites.size();
		System.out.println("Site No : "+number);
		
		WritableSheet s[]= new WritableSheet[number]  ;
		//Common column labels
		String Collumn[]={"Brand / Model","Details","Count","Usage","Unit cost ($)","Total cost ($)","Grand Total ($)"};
		
		for(int i=0;i<number;i++){
			//create Sheets
			s[i] = workbook.createSheet("Hw-Sw spec ("+Sites.get(i)+" )",( i+4));
			//get site Name
			String site=Sites.get(i);
			System.out.println("Site Name : "+site);
			
			//set Column Width 
			s[i].setColumnView(0, 50);
			s[i].setColumnView(1, 44);
			s[i].setColumnView(2, 9);
			s[i].setColumnView(3, 50);
			s[i].setColumnView(4, 10);
			s[i].setColumnView(5, 10);
			s[i].setColumnView(6, 14);
			
			obj[2]=site; //set site name to String
			
			List<String> PacakgeTypes=projectItemsService.getPackageType(versionMapService.getAll(projects, obj[1], obj[0], site));
			
			//get chart numbers
			int CNumner=PacakgeTypes.size();
			System.out.println("PacakgeTypes Sz : "+CNumner);
			int itemNumber=4;
			Number nm;//,nm2;
			Formula f;
			
			FontName ft=WritableFont.ARIAL;
			NumberFormat nf=new NumberFormat("#0");
			
			WritableFont wf = new WritableFont(ft,12,WritableFont.BOLD,false,UnderlineStyle.SINGLE);
			WritableFont wf1 = new WritableFont(ft,10,WritableFont.BOLD);
			WritableFont wf2 = new WritableFont(ft,10,WritableFont.NO_BOLD);
			WritableFont wf3 = new WritableFont(ft,10,WritableFont.BOLD,false,UnderlineStyle.NO_UNDERLINE,Colour.WHITE);
			WritableFont nFt = new WritableFont(ft,10);
			
			WritableCellFormat cf = new WritableCellFormat(wf);		//Heading
			WritableCellFormat cf1 = new WritableCellFormat(wf1);	//Sheet Total
			WritableCellFormat cf2 = new WritableCellFormat(wf2);	//Heading
			WritableCellFormat cf3 = new WritableCellFormat(wf2);	//table data cell format
			WritableCellFormat cf4 = new WritableCellFormat(wf3);	//Table Name Row
			WritableCellFormat cf5 = new WritableCellFormat(wf2);	//Table Label
			WritableCellFormat cf6 = new WritableCellFormat(wf2);	//Bottom Grand Total
			WritableCellFormat cf7 = new WritableCellFormat(wf2);	//Empty Box
			WritableCellFormat nF = new WritableCellFormat(nFt,nf);	//Number Box
			
			cf.setBackground(Colour.WHITE);
			cf1.setBackground(Colour.BRIGHT_GREEN );
			cf2.setBackground(Colour.VERY_LIGHT_YELLOW);
			cf4.setBackground(Colour.DARK_BLUE2);
			cf5.setBackground(Colour.GRAY_25);
			cf6.setBackground(Colour.BRIGHT_GREEN);
			
			cf3.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
			cf5.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
			cf6.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
			cf7.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);
			nF.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
			
			cf2.setWrap(true);
			cf3.setWrap(true);
			cf5.setWrap(true);
			cf6.setWrap(true);
			
			
			/*************Starting to Write in Excel Sheet*********************/
			
			Label l=new Label(0, 0, "Hardware/Software specification", cf);
			s[i].addCell(l);
			l= new Label(1,2,"Total hardware/software cost (US $)",cf1);
			s[i].addCell(l);
			l = new Label(5, 2, "List prices are as of",cf2);
			s[i].addCell(l);
			
			
			for(int j=0;j<CNumner;j++){
				
				String Package=PacakgeTypes.get(j);
				System.out.println("String for alll : "+Package +" "+projects+" "+ obj[0]+" "+obj[1]+" "+ site+" "+ Package);
				List<ProjectItems> projectItems=projectItemsService.getAll(versionMapService.getAll(projects, obj[1], obj[0], site),Package);
				
				//get package Number
				int PakNumber=projectItems.size();
					
				//Table name
			System.out.println("Package no for each table :"+PakNumber);
				
				
				
				//table Column
				for(int k=0;k<7;k++){
					
					l = new Label(k, itemNumber+2, Collumn[k],cf5);
					s[i].addCell(l);
					
					System.out.println(k);
					
					if(k==0){
						l = new Label(0, itemNumber+1, Package,cf4);
						s[i].addCell(l);
					}else{
						l = new Label(k, itemNumber+1, "",cf4);
						s[i].addCell(l);
					}
				}
				
				itemNumber+=2;
				System.out.println("Column No : "+itemNumber);
				cf.setFont(wf2);
				int start=0;
				
				for(int m=0;m<PakNumber;m++){
					
					start=itemNumber++;
					
					Packages pacakgeName= projectItems.get(m).getPackageID();
					l = new Label(0, itemNumber,pacakgeName.getPackageName(),cf3);
					s[i].addCell(l);
					System.out.println("Pcakege names for each row : "+pacakgeName.getPackageName());
					
					List<EquipmentBulk> equipments=equipmentsBulkService.getPackageBulk(pacakgeName);
					String PackgeDetais ="";
					
					for(int n=0;n<equipments.size();n++){
						PackgeDetais+=equipments.get(n).getEquipmentsId().getItemName() + " : "+equipmentsBulkService.EquipmentsBulkget(pacakgeName, equipments.get(n).getEquipmentsId()).getQuantity() + " , \n"; 
					}
					
					l = new Label(1, itemNumber,PackgeDetais,cf3);
					s[i].addCell(l);
					
					
					nm= new Number(2, itemNumber, projectItems.get(m).getQuantity(), nF);
					s[i].addCell(nm);
					
					
					l = new Label(3, itemNumber,projectItems.get(m).getPcakageUsege(),cf3);
					s[i].addCell(l);
					
			
					long price=projectItems.get(m).getPackageID().getBasePrice();
					List <EquipmentBulk> lst =equipmentsBulkService.getPackageBulk(projectItems.get(m).getPackageID());
					for(int k=0;k<lst.size();k++){
						price+=lst.get(k).getEquipmentsId().getPrice();
					}
					nm = new Number(4, itemNumber,price,nF);
					s[i].addCell(nm);
					
					
					f = new Formula(5, itemNumber, "E"+(itemNumber+1)+"*C"+(itemNumber+1),cf3);
					s[i].addCell(f);
					
					
					l = new Label(6, itemNumber,null,cf3);
					s[i].addCell(l);
					
				}
				itemNumber++;

				
				int k[]={0,1,3,4,5};
				for(int no=0;no<5;no++){
					l = new Label(k[no], itemNumber,null,cf7);
					s[i].addCell(l);
				}
				
				f = new Formula(2, itemNumber, "SUM(C"+(start)+":C"+(itemNumber)+")",cf7);
				s[i].addCell(f);
				
				
				f = new Formula(6, itemNumber, "SUM(F"+(start)+":F"+(itemNumber)+")",cf7);
				s[i].addCell(f);
				
				itemNumber++;
			}
			int last = itemNumber+1;
			
			f = new Formula(2, 2, "SUM(G7:G"+last+")",cf1);
			s[i].addCell(f);
			
			s[i].mergeCells(4, last, 5, last);
			
			l = new Label(4, last, "Total hardware cost (US $)",cf6);
			s[i].addCell(l);
			f = new Formula(6, last, "SUM(G7:G"+(last-1)+")",cf6);
			s[i].addCell(f);	
			 
		}
		
	}

}