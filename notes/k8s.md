## important commands ##
general
- kubectl create [type] name
- kubectl create -f file.yml
- kubectl apply -f file.yml
- kubectl run myPod --image=myimage --dry-run=client -o yaml > definition.yaml
- kubectl get pods/replicaset/
- kubectl describe pod (label)
- kubectl scale --replicas=6 -f replicaset-definition.yml
    - will only update file, not apply
- kubectl scale --replicas=6 replicaset myapp-replicaset
- kebectl [command] --namespace=[namespace]

testing stuff
- https://learn.kodekloud.com/user/courses/certified-kubernetes-application-developer-ckad/module/eae8cedf-d483-471f-8796-49f69baec6cf/lesson/c1002aef-471a-4249-b963-e3071fbbbdcb
- https://kubernetes.io/docs/reference/kubectl/conventions/
- https://kubernetes.io/docs/reference/kubectl/quick-reference/
- kubectl get pod -o yaml > pod-definition.yaml
    --o yaml, output yaml of resource definition
- kubectl run pod --dry-run=client
- kubectl run nginx --image=nginx --dry-run=client -o yaml
    - quickly get pod manifest file

config
- kubectl config set-context $(kubectl config current-context) --namespace=dev
    --all-namespaces


## pods ##
```yaml
apiVersion: v1 # string, version of k8s api using (v1)
kind: Pod # string, type of object creating (Pod - UPPERCASE)
metadata: # ...dict, info about resource
    name: myApp-pod
    labels: # dict, any key and value pairs
        app: myApp
spec: # what's inside object creating
    containers: # list, can have multiple containers
    -   name: nginx-container
        image: (nginx)
```

## replicas ##
arch
- node
    - replication controller/replica set
        - pods
- node
    - replication controller/replica set (same one)
        - pods

notes
- use labels for replica set to know which pods to monitor

Replica Controller:
```yaml
apiVersion: v1 # string, version of k8s api using (v1)
kind: ReplicationController # or ReplicaSet
metadata: # ...dict, info about resource
    name: myApp-rc
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
```

Replica Set:
```yaml
apiVersion: apps/v1 # app/ for replica set
kind: ReplicaSet 
metadata: # ...dict, info about resource
    name: myApp-replicaset
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

## Deployment

```yaml
apiVersion: apps/v1 # app/ for replica set
kind: Deployment 
metadata: # ...dict, info about resource
    name: myApp-replicaset
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                app: myApp
        spec: 
            containers: 
            -   name: nginx-container
                image: (nginx)
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

```yaml
apiVersion: apps/v1 # app/ for replica set
kind: Deployment 
metadata: # ...dict, info about resource
    name: httpd-frontend
    labels: # dict, any key and value pairs
        app: myApp
spec:
    template: 
        # --------------- def from pod file ----------------
        metadata: # ...dict, info about resource
            name: myApp-pod
            labels: 
                type: front-end
        spec: 
            containers: 
            -   name: httpd
                image: httpd:2.4-alpine
        # ---------------------------------------------------
    replicas: 3
    selector: # main difference, not necessary in replica controller
        matchLabels:
            type: front-end
```

## namespaces ##

```yaml
apiVersion: v1
kind: Namespace 
metadata: 
    name: dev
```

## services ##

NodePort
```yaml
apiVersion: v1 
kind: Service 
metadata: 
    name: myapp-service

spec:
    type: NodePort
    ports:
    -   targetPort: 80
        port: 80
        nodePort: 30008
    selector:
        app: myapp
        type: front-end
```

ClusterIP
NodePort
```yaml
apiVersion: v1 
kind: Service 
metadata: 
    name: back-end

spec:
    type: ClusterIP
    ports:
    -   targetPort: 80
        port: 80
    selector:
        app: myapp
        type: back-end
```