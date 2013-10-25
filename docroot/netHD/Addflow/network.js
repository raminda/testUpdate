/**
 * @author DECAN
 */
var flow;

        function createDiagram() {
            var canvas;

            canvas = document.getElementById('canvas');
            flow = new Lassalle.Flow(canvas);

            //flow.fillStyle = 'lightblue';
            //flow.isFixedSize = true;
            flow.refresh();
                        
            flow.nodeModel.strokeStyle = 'transparent';
            flow.nodeModel.textFillStyle = 'navy';
            flow.nodeModel.fillStyle = 'transparent';
            flow.nodeModel.gradientFillStyle = 'transparent';
            flow.nodeModel.shapeFamily = "rectangle";
            flow.nodeModel.textPosition = "centerBottom";

            flow.linkModel.strokeStyle = 'orange';
            flow.linkModel.fillStyle = 'orange';
            flow.linkModel.arrowDst = null;
            flow.linkModel.isStretchable = false;
            flow.linkModel.lineWidth = 3;

            if (flow.taskManager.canUndoRedo) {
                flow.taskManager.beginAction("creatediagram");
            }

            flow.beginUpdate();

            // Load some images that will be displayed inside nodes
            imclud = new Image();
            imclud.src = '/test-portlet/Img/clud.png';
            imarray = new Image();
            imarray.src = '/test-portlet/Img/array.png';
            imcomp = new Image();
            imcomp.src = '/test-portlet/Img/computer.png';
            imdb = new Image();
            imdb.src = '/test-portlet/Img/db.png';
            imfir = new Image();
            imfir.src = '/test-portlet/Img/firwall.png';
            immain = new Image();
            immain.src = '/test-portlet/Img/main.png';
            imrwt = new Image();
            imrwt.src = '/test-portlet/Img/rwt.png';
            imserv = new Image();
            imserv.src = '/test-portlet/Img/server.png';
                        
            // Create the nodes
            
            var server1 = flow.addNode(30, 10, 50, 70, "Server");
            var server2= flow.addNode(452, 459, 50, 70, "Server");
            var server3 = flow.addNode(30, 190, 50, 70, "Server");
            var server4 = flow.addNode(30, 270, 50, 70, "Server");
            
            var server5 = flow.addNode(90, 800, 50, 70, "Server");
            var server6 = flow.addNode(290, 800, 50, 70, "Server");
            var server7 = flow.addNode(490, 800, 50, 70, "Server");
            var server8 = flow.addNode(690, 800, 50, 70, "Server");
            
            var pc1 = flow.addNode(650, 5, 50, 70, "End User");
            
            var Switch1 = flow.addNode(200, 50, 50, 50, "switch");
            var Switch2 = flow.addNode(200, 230, 50, 50, "switch");
            
            var Switch3 = flow.addNode(400, 600, 50, 50, "switch");
            var Switch4 = flow.addNode(600, 600, 50, 70, "switch");
             
            var array1 = flow.addNode(350, 50, 50, 50, "array");
            var array2 = flow.addNode(800, 600, 50, 50, "array");
           
            var Mainframe1 = flow.addNode(350, 150, 50, 50, "Mainframe");
            var Mainframe2 = flow.addNode(300, 500, 50, 50, "Mainframe");
            
            var Firewall = flow.addNode(550, 100, 50, 50, "Firewall");
            var cloud = flow.addNode(660, 10, 30, 50, "cloud");
      
            server1.image=imserv;
            server2.image=imserv;
            server3.image=imserv;
            server4.image=imserv;
            server5.image=imserv;
            server6.image=imserv;
            server7.image=imserv;
            server8.image=imserv;
            
            pc1.image=imcomp;
            
            Switch1.image=imrwt;
            Switch2.image=imrwt; 
            Switch3.image=imrwt;
            Switch4.image=imrwt;
           
            array2.image=imarray;
            array1.image=imarray;
            Mainframe2.image=immain;
            Mainframe1.image=immain;
            Firewall.image =imfir;
            cloud.image =imclud;
            
            imserv.onload = function () {
            	server1.refresh();
            	server2.refresh();
            	server3.refresh();
            	server4.refresh();
            	server5.refresh();
            	server6.refresh();
            	server7.refresh();
            	server8.refresh();
            };

           imrwt.onload = function () {
            	Switch1.refresh();
            	Switch2.refresh();
            	Switch3.refresh();
            	Switch4.refresh();
            }; 

            immain.onload = function () {
            	Mainframe1.refresh();
            	Mainframe2.refresh();
            };
            
            imcomp.onload = function () {
            	pc1.refresh();
            };
            
            imarray.onload = function () {
            	array1.refresh();
            	array2.refresh();
            };

            // Create the links
            
            flow.addLink(server1, Switch1);
            flow.addLink(server2, Switch1);
            flow.addLink(server1, Switch2);
            flow.addLink(server2, Switch2);
            flow.addLink(server3, Switch2);
            flow.addLink(server4, Switch2);
            flow.addLink(server3, Switch1);
            flow.addLink(server4, Switch1);
            
            flow.addLink(server5, Switch3);
            flow.addLink(server6, Switch3);
            flow.addLink(server5, Switch4);
            flow.addLink(server6, Switch4);
            flow.addLink(server7, Switch4);
            flow.addLink(server8, Switch4);
            flow.addLink(server7, Switch3);
            flow.addLink(server8, Switch3);
            
            flow.addLink(Mainframe2, Switch3);
            flow.addLink(Mainframe2, Switch4);
            flow.addLink(Mainframe1, Switch1);
            flow.addLink(Mainframe1, Switch2);
            
            
            flow.addLink(Mainframe2, array2);
            flow.addLink(Mainframe1, array1);
            
            flow.addLink(cloud, Firewall);
            
            flow.endUpdate();

            if (flow.taskManager.canUndoRedo) {
                flow.taskManager.endAction();
            }
        }
        
        function undo() {
            flow.taskManager.undo();
        }

        function redo() {
            flow.taskManager.redo();
        }

        function selectall() {
            flow.selectAll();
        }

        function delete2() {
            flow.deleteSel();
        }     